import * as rollup from 'rollup';
import chokidar from 'chokidar';
import fse from 'fs-extra';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const WATCH_PRE_SCRIPT_DIRECTORY = path.resolve(__dirname, 'prescripts');
const WATCH_RESPONSES_DIRECTORY = path.resolve(__dirname, 'responses');
const WATCH_UTIL_DIRECTORY = path.resolve(__dirname, 'util');

const OUTPUT_SCRIPT_DIRECTORY = path.resolve(__dirname, 'scripts');

const outputScriptFileName = (preScript: string): string => preScript.split('.')[0].slice(0,-3);  //+ '.js';

const compileScript = async () => {
  try {
    const preScriptDirList = await fse.readdir(WATCH_PRE_SCRIPT_DIRECTORY);
    for (const preScript of preScriptDirList) {
      const plainName = outputScriptFileName(preScript);

      const bundle = await rollup.rollup({
        input: path.resolve(__dirname, 'prescripts', preScript),
        plugins: [
          typescript({ module: 'CommonJS' }), //
          resolve(),
          commonjs({ extensions: ['.js', '.ts'] })
        ]
      });

      await bundle.write({
        format: 'iife',
        // name: `${plainName}.js`,
        file: path.resolve(__dirname, 'scripts', `${plainName}.js`),
      });
    }
  } catch (error) {
    throw new Error(`compileScript - ${error}`);
  }
};

const main = async () => {
  // initial run
  await compileScript();

  // further changes
  chokidar.watch([WATCH_PRE_SCRIPT_DIRECTORY, WATCH_RESPONSES_DIRECTORY, WATCH_UTIL_DIRECTORY]).on('change', async (event, path) => {
    console.log('change observed');
    await compileScript();
  });
};

// QUICK REFERENCE
// this is how the import statements will look like.
// import 'responses/guide.js';
// it takes from

export default main;
