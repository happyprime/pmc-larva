const clone = require( '@penskemediacorp/larva' ).clone;
const path = require( 'path' );
const c_link_path = path.resolve( __dirname, '../../components/c-link/c-link.prototype' );
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );
const c_icon = clone( path.resolve( __dirname, '../../components/c-icon/c-icon.full' ) );

const data = require( '../../_data/brands.json' );

o_nav.o_nav_title_text = 'Our Sites';
o_nav.o_nav_list_items = [];

c_icon.c_icon_classes = 'pmc-u-max-width-150 pmc-u-max-height-50';
c_icon.c_icon_name = 'pmc-logo-black';
c_icon.c_icon_url = 'https://pmc.com';
c_icon.c_icon_rel_name = 'noopener noreferrer';

// pmc-u-margin-r-2 pmc-u-margin-r-00@mobile-max pmc-u-margin-b-1@mobile-max u-flex-order-1@mobile-max

data.brands.forEach( ( brand ) => {
	let c_link = clone( c_link_path );

	c_link.c_link_text = brand.name;
	c_link.c_link_url = brand.url;

	o_nav.o_nav_list_items.push( c_link );
});

o_nav.o_nav_classes = 'pmc-u-text-transform-uppercase pmc-u-padding-lr-1 pmc-u-font-size-12 pmc-js-MobileHeightToggle';
o_nav.o_nav_title_classes = 'pmc-u-margin-tb-00 pmc-u-padding-t-1 pmc-u-padding-b-050 pmc-u-width-100p a-icon-after a-icon-down-arrow a-icon-after:margin-l-auto pmc-u-cursor-pointer pmc-js-MobileHeightToggle-trigger';
o_nav.o_nav_list_classes = 'pmc-js-MobileHeightToggle-target pmc-u-padding-b-050';
o_nav.o_nav_list_item_classes = 'pmc-u-padding-tb-050 pmc-u-color-grey-medium-dark pmc-js-MobileHeightToggle-list-item';

module.exports = {
	"c_icon": c_icon,
	"c_tagline": {
		"c_tagline_classes": "pmc-u-margin-a-00",
		"c_tagline_text": "Copyright © 2018 Penske Business Media, LLC. All rights reserved."
	},
	"c_link": {
		"c_link_classes": "pmc-a-unstyle-link",
		"c_link_text": "Powered by WordPress.com VIP",
		"c_link_url": "#"
	},
	"o_nav": o_nav
};
