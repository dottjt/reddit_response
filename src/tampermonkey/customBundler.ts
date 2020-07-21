import * as rollup from 'rollup';
import chokidar from 'chokidar';
import fse from 'fs-extra';
import path from 'path';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
// import postcss from 'rollup-plugin-postcss'
// import { terser } from 'rollup-plugin-terser';
import jsx from 'acorn-jsx';

import throttle from 'lodash.throttle';
import transformInferno from 'ts-transform-inferno';

const WATCH_PRE_SCRIPT_DIRECTORY = path.resolve(__dirname, '..', 'prescripts');
const WATCH_RESPONSES_DIRECTORY = path.resolve(__dirname, '..', 'util', 'responses');
const WATCH_UTIL_DIRECTORY = path.resolve(__dirname, '..', 'util');
const WATCH_COMPONENTS_DIRECTORY = path.resolve(__dirname, '..', 'components');

const tsTransformer = () => ({
  before: [transformInferno()],
  after: [],
})

const outputScriptFileName = (preScript: string): string => preScript.split('.')[0].slice(0,-3);  //+ '.js';

const compileScript = async (preScriptDirList) => {
  try {

    for (const preScript of preScriptDirList) {
      const plainName = outputScriptFileName(preScript);

      const bundle = await rollup.rollup({
        input: path.resolve(__dirname, '..', 'prescripts', preScript),
        // external: [ 'crypto' ], // tells Rollup 'I know what I'm doing here'
        acornInjectPlugins: [jsx()],
        plugins: [
          resolve({
            browser: true,
          }),
          typescript({
            tsconfig: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
            transformers: [tsTransformer],
            tsconfigOverride: { compilerOptions : { module: "es2015" } }
          }),
          replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
          }),
          commonjs({
            extensions: ['.js', '.ts', '.tsx'],
          }),
          // terser() // there is no point for this at all.
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

  const dir = await fse.readdir(WATCH_PRE_SCRIPT_DIRECTORY);

  await compileScript(dir);

  const chokidarHandler = async (dirArray, event, path) => {
    console.log('change observed');
    await compileScript(dirArray);
  }

  const messageComposeScriptPre = path.resolve(__dirname, '..', 'prescripts', 'messageComposeScriptPre.ts');
  const messageComposeScriptForumPre = path.resolve(__dirname, '..', 'prescripts', 'messageComposeScriptForumPre.ts');
  const messageInboxScriptPre = path.resolve(__dirname, '..', 'prescripts', 'messageInboxScriptPre.tsx');
  const noFapNewSubredditPre = path.resolve(__dirname, '..', 'prescripts', 'noFapNewSubredditPre.tsx');
  const retrieveCastboxLinksPre = path.resolve(__dirname, '..', 'prescripts', 'retrieveCastboxLinksPre.ts');
  const noFapForumPre = path.resolve(__dirname, '..', 'prescripts', 'noFapForumPre.tsx');

  // WATCH_PRE_SCRIPT_DIRECTORY,

  // further changes
  chokidar.watch([ messageComposeScriptPre ]).on('change', throttle((event, path) => chokidarHandler(['messageComposeScriptPre.ts'], event, path), 2000));
  chokidar.watch([ messageComposeScriptForumPre ]).on('change', throttle((event, path) => chokidarHandler(['messageComposeScriptForumPre.ts'], event, path), 2000));
  chokidar.watch([ messageInboxScriptPre ]).on('change', throttle((event, path) => chokidarHandler(['messageInboxScriptPre.tsx'], event, path), 2000));
  chokidar.watch([ noFapNewSubredditPre ]).on('change', throttle((event, path) => chokidarHandler(['noFapNewSubredditPre.tsx'], event, path), 2000));
  chokidar.watch([ retrieveCastboxLinksPre ]).on('change', throttle((event, path) => chokidarHandler(['retrieveCastboxLinksPre.ts'], event, path), 2000));
  chokidar.watch([ noFapForumPre ]).on('change', throttle((event, path) => chokidarHandler(['noFapForumPre.tsx'], event, path), 2000));
  chokidar.watch([ WATCH_COMPONENTS_DIRECTORY, WATCH_RESPONSES_DIRECTORY, WATCH_UTIL_DIRECTORY ]).on('change', throttle((event, path) => chokidarHandler(dir, event, path), 2000));

  // make a few different ones
};

// QUICK REFERENCE
// this is how the import statements will look like.
// import 'responses/guide.js';
// it takes from

export default main;
