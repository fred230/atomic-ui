const { EndOfLineState } = require("typescript");

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules:{
    'prettier/prettier': ['error',{EndOfLine: 'auto'}],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
   'react/static-property-placement': 'off',
  }
}
