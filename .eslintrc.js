const eslintConfig = {
	root: true,
	extends: [
    'plugin:@wordpress/eslint-plugin/recommended',
    'plugin:@wordpress/eslint-plugin/test-unit'
  ],
  rules: {
    "camelcase": "off" // used in larva prototypes
  }
};

module.exports = eslintConfig;
