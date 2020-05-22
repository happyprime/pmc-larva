const path = require( 'path' );
const getAppConfiguration = require( './getAppConfiguration' );
const getPatternVariants = require( './getPatternVariants' );
const getSubDirectoryNames = require( './getSubDirectoryNames' );
const getModuleNamesFromDirectory = require( './getModuleNamesFromDirectory' );

const config = getAppConfiguration( 'patterns' );

/**
 * Get All Patterns
 *
 * Given a directory contianing patterns in the Larva structure (components/object/modules/one-offs),
 * return an object representing all the pattern types, patterns, and their variants.
 *
 * @param {string} startPath - Path to look in for all patterns. Should be assets/src/patterns.
 * @return {object} - Object representing all patterns and variants
 */

module.exports = function getAllPatternsObj( startPath ) {

	const patternDirs = getSubDirectoryNames( startPath );

	let obj = {};

	try {
		patternDirs.map( ( patternType ) => {
			let patterns = [];
			obj[patternType] = {};

			// Modules can be ignored, which maybe is unecessary
			// but for now continue on that path.
			if ( 'modules' === patternType ) {
				patterns = getModuleNamesFromDirectory( startPath, config.ignoredModules );
			} else {
				patterns = getSubDirectoryNames( path.join( startPath, patternType ) );
			}

			patterns.map( ( pattern ) => {
				obj[patternType][pattern] = getPatternVariants( path.join( startPath, `${patternType}/${pattern}` ) );
			} );

		} );
	} catch ( e ) {
		console.error( e );
	}

	return obj;
}