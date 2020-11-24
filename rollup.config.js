import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import react from 'react';
import reactDom from 'react-dom';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';
import url from 'rollup-plugin-url';
import postCssUrl from 'postcss-url';
import pkg from './package.json';

const path = require('path');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'components/index.tsx';

const plugins = [
    resolve({
        extensions,
        mainFields: ['module', 'main']
    }),
    postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
        extract: true,
        plugins: [
            postCssUrl([{url: 'copy',  assetsPath: 'static', useHash: true}])
        ],
        modules: {
            generateScopedName: 'vui-[local]-[hash:base64:5]'
        },
        use: ['sass', 'less']
    }),
    babel({
        runtimeHelpers: true ,
        exclude: 'node_modules/**',
        extensions: extensions
    }),
    commonjs({
        include: 'node_modules/**',
        namedExports: {
            react: Object.keys(react),
            'react-dom': Object.keys(reactDom),
            'node_modules/react-is/index.js': [
                'typeOf',
                'isElement',
                'isValidElementType',
                'ForwardRef'
            ]
        }
    }),
    alias({
        resolve: extensions,
        entries: {
            Assets: path.resolve(__dirname, 'assets/'),
            Components: path.resolve(__dirname, 'components/'),
            Hooks: path.resolve(__dirname, 'hooks/'),
            Util: path.resolve(__dirname, 'components/_util/')
        }
    }),
    url({
        include: ['**/*.svg', '**/*.ttf', '**/*.png', '**/*.gif']
    }),
    typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
        check:false
    })
];

export default {
    input,
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins,
    external: ['react', 'react-dom']
};