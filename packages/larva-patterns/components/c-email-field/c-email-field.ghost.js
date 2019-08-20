
const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_email_field = clone( path.resolve( __dirname, './c-email-field.prototype' ) );

c_email_field.c_email_field_classes = "lrv-u-font-size-14 lrv-u-flex lrv-u-align-items-center";
c_email_field.c_email_field_label_classes = "lrv-u-padding-r-050 lrv-u-font-weight-bold lrv-u-whitespace-nowrap";
c_email_field.c_email_field_input_classes = "lrv-u-background-transparent lrv-u-border-a-0 lrv-u-color-currentColor lrv-u-padding-a-050 lrv-u-font-size-14";

module.exports = c_email_field;