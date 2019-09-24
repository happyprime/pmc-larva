const assert = require( 'assert' );
const { concatStrings } = require( '../lib/concatStrings.js' );

describe( 'concatStrings', () => {

	const sprites = [
		'<svg>sprite1</svg>',
		'<svg>sprite2</svg>'
	];

	it( 'merges two sprites together', () => {
		const spriteResult = concatStrings( sprites );

		assert.equal( spriteResult.includes( 'sprite1' ), true );
		assert.equal( spriteResult.includes( 'sprite2' ), true );
	});

	// it( 'gets array of strings from files', () => {
	// 	const spriteResult = concatStrings( sprites );

	// 	assert.equal( spriteResult.includes( 'sprite1' ), true );
	// 	assert.equal( spriteResult.includes( 'sprite2' ), true );
	// });
});