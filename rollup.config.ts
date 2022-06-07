import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  // external,
  context: 'window',
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
      browser: true,
    }),
    ts({
      transpiler: 'swc',
    }),
    commonjs(),
  ],
};
