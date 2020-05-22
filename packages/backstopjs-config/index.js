const merge = require( 'webpack-merge' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const backstopUtils = require( './lib/utils' );
const getScenarios = require( './lib/getScenarios' );

// Get app config from project
const getAppConfiguration = require( '@penskemediacorp/larva' ).getConfig;
const appConfiguration = getAppConfiguration( 'backstop' );

const cliArgs = ( function getCliArgs() {
	if ( 'test' === process.env.NODE_ENV ) {
		return false;
	}

	return process.argv;
}() );

const urlBase = backstopUtils.maybeUseCliUrl( cliArgs, appConfiguration.testBaseUrl );
const selectors = backstopUtils.prepareTestSelectors( ( appConfiguration.larvaModules || null ) );

let paths = backstopUtils.prepareTestPaths( appConfiguration.larvaModules, appConfiguration.testPaths );

// Exit if no paths in config.
if ( 0 === paths.length ) {
	console.error( chalk.red.bold( '\nPlease specify paths to test in larva.config.js in the structure `backstop.testPaths`, or add modules in `backstop.larvaModules`\n' ) );
	process.exit( 1 );
}

// Exit if no URL from config or CLI.
if ( undefined === appConfiguration.testBaseUrl && false === urlFromCli ) {
	console.error( chalk.red.bold( '\nPlease specify a QA URL in pmc.config.js in `backstop.testBaseUrl`, or pass in a full URL with the comman e.g. `npm run backstop -- test --url=https://example.com`\n' ) );
	process.exit( 1 );
}

const scenarios = getScenarios( urlBase, paths, selectors, appConfiguration.testScenario );

console.log( chalk.blue( 'Testing paths: \n' + paths ) );

module.exports = merge({
	'id': 'backstop_test',
	'viewports': [
		{
			'name': 'small',
			'width': 400,
			'height': 620
		},
		{
			'name': 'desktop',
			'width': 1000,
			'height': 800
		},
		{
			'name': 'desktop-xl',
			'width': 1300,
			'height': 1000
		}
	],
	'scenarios': scenarios,
	'paths': {
		'bitmaps_reference': process.cwd() + '/backstop_data/bitmaps_reference',
		'bitmaps_test': process.cwd() + '/backstop_data/bitmaps_test',
		'engine_scripts': path.join( __dirname, './backstop_data/engine_scripts' ),
		'html_report': process.cwd() + '/backstop_data/html_report',
		'ci_report': process.cwd() + '/backstop_data/ci_report'
	},
	'report': [ 'browser' ],
	'engine': 'puppeteer',
	'engineOptions': {
		'waitTimeout': 120000
	},
	'asyncCaptureLimit': 5,
	'asyncCompareLimit': 50,
	'debug': false,
	'debugWindow': false
}, appConfiguration.backstopConfig );

