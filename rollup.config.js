import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from "rollup-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        input: "src/index.ts",
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
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            alias({
                resolve: ['.ts', '.tsx', '.d.ts'],
                entries: [
                    {
                        find: 'src',
                        replacement: './src',
                      },
                ],
            }),
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    }
]
