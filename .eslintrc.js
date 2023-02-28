/* eslint-disable no-magic-numbers */
module.exports = {
    env: {
        browser: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true,
        node: true
    },
    extends: ['eslint:all', 'plugin:react/recommended', 'prettier'],
    globals: {
        SingleSpa: true,
        xhook: true
    },
    overrides: [
        {
            files: ['*.jsx', '*.js']
        },
        {
            files: ['*.test.js'],
            globals: {
                And: true,
                Given: true,
                // eslint-disable id-length
                I: true,
                Then: true,
                When: true,
                inject: true,
                pause: true
            },
            rules: {
                'id-length': 'off',
                'max-lines': 'off',
                'max-lines-per-function': ['off'],
                'max-statements': 'off',
                'new-cap': 'off',
                'no-magic-numbers': 'off',
                'no-undefined': 'off',
                'require-unicode-regexp': 'off'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
        camelcase: ['error', { properties: 'never' }],
        'default-case': 'off',
        'id-length': 'off',
        'linebreak-style': 'off',
        'max-lines-per-function': ['error', 100],
        'max-statements': ['error', 20],
        'multiline-ternary': 'off',
        'no-console': 'warn',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-ternary': 'off',
        'no-warning-comments': 'off',
        'one-var': 'off',
        'react/display-name': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
