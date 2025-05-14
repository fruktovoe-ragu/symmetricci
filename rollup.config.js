import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from '@rollup/plugin-alias';
import dts from "rollup-plugin-dts";
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'rollup-plugin-esbuild'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        input: "src/index.ts",
        external: ['react', 'react-dom'],
        output: [
            {
                file: "dist/cjs/index.js",
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: "dist/esm/index.js",
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true,
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                sourceMap: true,
            }),
            alias({
                resolve: ['.ts', '.tsx', '.d.ts'],
                entries: [
                    {
                        find: 'src',
                        replacement: path.resolve(__dirname, './src'),
                    },
                ],
            }),
            [esbuild({
                minify: true,
            })],
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{
            file: "dist/index.d.ts",
         }],
        plugins: [
            dts(),
        ],
    }
]
