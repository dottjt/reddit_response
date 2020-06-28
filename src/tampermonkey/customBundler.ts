import * as rollup from 'rollup';
import chokidar from 'chokidar';
import fse from 'fs-extra';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss'
import jsx from 'acorn-jsx';


const WATCH_PRE_SCRIPT_DIRECTORY = path.resolve(__dirname, 'prescripts');
const WATCH_RESPONSES_DIRECTORY = path.resolve(__dirname, 'responses');
const WATCH_UTIL_DIRECTORY = path.resolve(__dirname, 'util');
const WATCH_COMPONENTS_DIRECTORY = path.resolve(__dirname, '..', 'components');

const OUTPUT_SCRIPT_DIRECTORY = path.resolve(__dirname, 'scripts');

const outputScriptFileName = (preScript: string): string => preScript.split('.')[0].slice(0,-3);  //+ '.js';

const compileScript = async () => {
  try {
    const preScriptDirList = await fse.readdir(WATCH_PRE_SCRIPT_DIRECTORY);
    for (const preScript of preScriptDirList) {
      const plainName = outputScriptFileName(preScript);

      const bundle = await rollup.rollup({
        input: path.resolve(__dirname, 'prescripts', preScript),
        // external: [ 'crypto' ], // tells Rollup 'I know what I'm doing here'
        acornInjectPlugins: [jsx()],
        plugins: [
          resolve({
            browser: true
          }),
          replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
          }),
          typescript({
            tsconfig: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
          }),
          commonjs({
            extensions: ['.js', '.ts', '.tsx'],
            // include: [ 'node_modules/**' ]
          }),
          // postcss({
          //   modules: true,
          //   plugins: []
          // })
        ]
      });

      await bundle.write({
        format: 'iife',
        name: `${plainName}.js`,
        file: path.resolve(__dirname, 'scripts', `${plainName}.js`),
      });

      console.log(`Rollup done: ${plainName}`)
    }
    console.log('Rollup all done.')
  } catch (error) {
    throw new Error(`compileScript - ${error}`);
  }
};

const main = async () => {
  // initial run
  await compileScript();

  // further changes
  chokidar.watch([WATCH_PRE_SCRIPT_DIRECTORY, WATCH_COMPONENTS_DIRECTORY, WATCH_RESPONSES_DIRECTORY, WATCH_UTIL_DIRECTORY]).on('change', async (event, path) => {
    console.log('change observed');
    await compileScript();
  });
};

// QUICK REFERENCE
// this is how the import statements will look like.
// import 'responses/guide.js';
// it takes from

export default main;
