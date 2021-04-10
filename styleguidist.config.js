const path = require('path');
const optionalRequireResolve = require(path.join(__dirname,'./lib/utils/optionalRequireResolve')).default;


class FixWebWorkerHMRPlugin {
    apply(compiler) {
        compiler.options.output.globalObject = '(typeof self !== "undefined" ? self : this)';
    }
}

const EXTERNAL_MODULES_TO_TRANSFORM = [
    // ref: https://github.com/styleguidist/react-styleguidist/pull/1327
    'acorn-jsx',
    'estree-walker',
    'regexpu-core',
    'unicode-match-property-ecmascript',
    'unicode-match-property-value-ecmascript',
    'react-dev-utils',
    'ansi-styles',
    'ansi-regex',
    'chalk',
    'strip-ansi',
    'chance',
];

function compositePropsParser(filePath, source, resolver, handlers) {
    if (filePath.match(/\.tsx?$/i)) {
        return require('react-docgen-typescript-lang-service').parse(filePath, source, resolver, handlers);
    } else {
        return require('react-docgen').parse(source, resolver, handlers);
    }
}

module.exports = {
    require: optionalRequireResolve([
        '@babel/polyfill',
        'bootstrap/dist/css/bootstrap.min.css'
    ]),
    skipComponentsWithoutExample: true,
    webpackConfig: {
        devtool: 'eval-cheap-module-source-map',
        module: {
            rules: [
                { test: /\.worker\.([jt])sx?$/, use: [{ loader: 'worker-loader' }] },
                { test: /\.([jt])sx?$/, exclude: new RegExp(`node_modules/(?!(${EXTERNAL_MODULES_TO_TRANSFORM.join('|')})/).*`), use: { loader: 'babel-loader', options: {
                            presets: [
                                ['@babel/env', { modules: 'commonjs', targets: { ie: '11' } }, ],
                                '@babel/react'
                            ]
                        } } },
                { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
                { test: /\.(jpg|png|gif|pdf|ttf|woff2?|eot|svg)$/, use: { loader: 'file-loader' } },
            ]
        },
        devServer: {
            disableHostCheck: true
        },
        plugins: [
            new FixWebWorkerHMRPlugin()
        ]
    },
    styleguideDir: path.join(process.cwd(), 'styleguide', 'styleguidist'),
    assetsDir: path.join(__dirname, 'lib/styleguide/assets'),
    styleguideComponents: {
        LogoRenderer: path.join(__dirname, 'lib/styleguide/components/Logo'),
        Playground: path.join(__dirname, 'lib/styleguide/components/Playground'),
        Preview: path.join(__dirname, 'lib/styleguide/components/Preview'),
        slots: path.join(__dirname, 'lib/styleguide/components/slots'),
    },
    compilerConfig: {
        objectAssign: 'Object.assign',
        transforms: {
            dangerousTaggedTemplateString: true,
        }
    },
    propsParser: compositePropsParser
}