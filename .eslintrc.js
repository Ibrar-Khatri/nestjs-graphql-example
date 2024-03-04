module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: `${__dirname}/tsconfig.json`,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: ['.eslintrc.js', '*.js'],
    rules: {
        'simple-import-sort/sort': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'var', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var', 'block', 'block-like'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: ['case', 'default'] }
        ],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-explicit-any': ['warn'],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/ban-types': [
            'warn',
            {
                types: {
                    '{}': {
                        message: 'Use object instead',
                        fixWith: 'object'
                    }
                }
            }
        ],
        'no-irregular-whitespace': ['warn', { skipComments: true }],
        'no-async-promise-executor': ['warn'],
        'no-case-declarations': ['off'],
        '@typescript-eslint/no-empty-function': ['warn'],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // '@typescript-eslint/explicit-module-boundary-types': ['warn']
            }
        }
    ]
};
