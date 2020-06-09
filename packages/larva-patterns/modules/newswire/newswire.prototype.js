const clonedeep = require( 'lodash.clonedeep' );

const o_card_prototype = require( '@penskemediacorp/larva-patterns/objects/o-card/o-card.prototype' );
const c_span_prototype = require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' );
const c_timestamp_prototype = require( '@penskemediacorp/larva-patterns/components/c-timestamp/c-timestamp.prototype' );
const c_heading_prototype = require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' );
const c_title_prototype = require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' );

const o_card = clonedeep( o_card_prototype );
const c_span = clonedeep( c_span_prototype );
const c_timestamp = clonedeep( c_timestamp_prototype );
const c_heading = clonedeep( c_heading_prototype );
const c_title = clonedeep( c_title_prototype );

c_heading.c_heading_text = 'Newswire';
c_heading.c_heading_classes = 'lrv-u-font-family-primary lrv-u-font-size-32 lrv-u-margin-b-050';

c_span.c_span_classes += ' lrv-u-display-block lrv-u-font-size-14 lrv-u-margin-tb-050 lrv-u-display-block';

c_timestamp.c_timestamp_classes = 'lrv-u-font-size-12 lrv-u-color-grey lrv-u-margin-t-auto@desktop';

c_title.c_title_text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi expedita pariatur sint eveniet.';
c_title.c_title_classes += ' lrv-u-font-size-12 lrv-u-font-size-14@desktop lrv-u-font-weight-normal lrv-u-margin-b-050';
c_title.c_title_url = false;

o_card.o_card_classes = 'lrv-u-flex lrv-u-flex-direction-column lrv-u-height-100p lrv-u-color-brand-primary:hover';
o_card.o_card_link_url = '#';
o_card.o_card_link_classes = 'lrv-a-unstyle-link lrv-u-display-block';
o_card.o_card_image_wrap_classes = '';
o_card.c_lazy_image.c_lazy_image_classes += ' lrv-a-hover-effect lrv-a-hover-effect--fade';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-4x3';
o_card.c_span = c_span;
o_card.c_title = c_title;
o_card.c_timestamp = c_timestamp;

module.exports = {
	c_heading: c_heading,
	newswire_items: [ o_card, o_card, o_card, o_card, o_card ]
};
