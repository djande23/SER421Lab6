module.exports = function () {

    console.log('running preset config');
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: 'auto',
                    loose: true,
                    targets: { node: 14, browsers: ['>0.25%'] }
                }
            ]
        ],
        plugins: [
            ['styled-components', { pure: true }],
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',
            'next/babel'
        ]
    };
};