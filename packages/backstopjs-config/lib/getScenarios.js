const merge = require( 'webpack-merge' );

module.exports = function getScenarios( urlBase, paths, selectorArr, scenarioOverride ) {

	let scenarios = [];

	for ( let i = 0; i < paths.length; i++ ) {
		
		let selectors = 1 === selectorArr.length ? selectorArr[0] : selectorArr[i];

		console.log( urlBase + paths[i] );

		scenarios.push( merge({
			'label': paths[i],
			'url': urlBase + paths[i],
			'hideSelectors': [],
			'removeSelectors': [],
			'selectors': [
				selectors
			],
			'delay': 500,
			'misMatchThreshold': 0.1,
			'onBeforeScript': 'puppet/onBefore.js',
			'onReadyScript': 'puppet/onReady.js'
		}, scenarioOverride ) );
	};

	return scenarios;
}