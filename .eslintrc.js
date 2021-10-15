module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true, // require を使う時は追加
    },
    extends: [
        // extends は後から追加した方のルールが優先される
        'eslint:recommended',
        'plugin:prettier/recommended', // 追加
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        // プロジェクトに合わせたルールを設定
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        semi: ['error', 'always'],
    },
};
