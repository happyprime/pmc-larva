const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_button = clone( path.resolve( __dirname, '../../components/c-button/c-button.stripped' ) );

c_button.c_button_classes += "lrv-u-color-white lrv-u-color-grey-light:hover lrv-u-background-black lrv-u-font-size-12 lrv-u-font-weight-bold lrv-u-text-transform-uppercase a-icon-after a-icon-arrow-right a-icon-invert";
c_button.c_button_text = "Send Us a Tip";
c_button.c_button_url = "https://google.com";
c_button.c_button_inner_classes = "lrv-u-color-white lrv-u-color-grey-light:hover";

module.exports = {
	"footer_tip_classes": "lrv-u-text-align-center lrv-u-color-white lrv-u-background-black",
	"c_title": {
		"c_title_classes": "lrv-u-margin-b-025 lrv-u-font-family-primary",
		"c_title_text": "Have a Tip?"
	},
	"c_tagline": {
		"c_tagline_classes": "lrv-u-font-size-14 u-font-style-italic lrv-u-font-family-basic",
		"c_tagline_text": "We want to hear from you! Send us a tip using our annonymous form."
	},
	"c_button": c_button
};
