module.exports = {
	concatStrings: ( spriteStrings ) => {
		let str = '';

		spriteStrings.forEach( sprite => {
			str += sprite;
		});

		return str;
	},

}