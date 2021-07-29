import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"

const svgr = require("@svgr/rollup").default


const packageJson = require("./package.json")

export default {
    input: "src/index.ts",
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
        },
      //  { file: packageJson.types, format: "es" }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        svgr({typescript: false}),
        typescript({ tsconfig: './tsconfig.json' }),
    ]
}
