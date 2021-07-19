import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import babel from '@rollup/plugin-babel';

const svgr = require("@svgr/rollup").default

const packageJson = require("./package.json")

export default {
    input: "src/components/library/index.js",
    external: id => id.includes('@babel/runtime'),
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        babel({
            plugins: ["@babel/plugin-transform-runtime"],
            presets: ["@babel/preset-react"],
            babelHelpers: 'runtime'
        }),
        commonjs(),
        svgr({typescript: false}),
    ]
}
