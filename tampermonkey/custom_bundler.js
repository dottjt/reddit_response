const chokidar = require('chokidar');
const fse = require('fs-extra');
const path = require('path');

const WATCH_PRE_SCRIPT_DIRECTORY = path.resolve(__dirname, 'prescripts');
const WATCH_RESPONSES_DIRECTORY = path.resolve(__dirname, 'responses');
const WATCH_UTIL_DIRECTORY = path.resolve(__dirname, 'util');

const OUTPUT_SCRIPT_DIRECTORY = path.resolve(__dirname, 'scripts');

const supplantPreScriptFile = async (preScriptContents, importStatementsArray) => {
  try {
    let finalPreScriptContents = preScriptContents;

    for (const importStatement of importStatementsArray) {
      const importFileName = importStatement.split("'")[1].trim();

      const importFileNamePath = path.resolve(__dirname, importFileName);
      const importFileContents = await fse.readFile(importFileNamePath);
      const importFileContentsReadable = importFileContents.toString();

      finalPreScriptContents = finalPreScriptContents.replace(importStatement, importFileContentsReadable);
    }
    return finalPreScriptContents;
  } catch (error) {
    throw new Error(`supplantPreScriptFile - ${error}`);
  }
}

const outputScriptFile = (preScript, finalPreScriptContents) => {
  const scriptFileName = preScript.split('.')[0].slice(0,-3) + '.js';
  const outputFileFinal = path.resolve(__dirname, OUTPUT_SCRIPT_DIRECTORY, scriptFileName);
  fse.outputFile(outputFileFinal, finalPreScriptContents);
}

const compileScript = async () => {
  try {
    const preScriptDirList = await fse.readdir(WATCH_PRE_SCRIPT_DIRECTORY);
    for (const preScript of preScriptDirList) {
      const preScriptFile = path.resolve(__dirname, 'prescripts', preScript);
      const preScriptContents = await fse.readFile(preScriptFile);
      const preScriptContentsReadable = preScriptContents.toString();

      const importStatementsRegex = new RegExp(/import\s*["']([\w/]+)([\w\.]+)['"]/g);
      const importStatementsArray = preScriptContentsReadable.match(importStatementsRegex);
      console.log(importStatementsArray)

      if (importStatementsArray) {
        const finalPreScriptContents = await supplantPreScriptFile(preScriptContentsReadable, importStatementsArray);

        outputScriptFile(preScript, finalPreScriptContents);
      }

      if (!importStatementsArray) {
        console.log(`no imports for ${preScript}`);
        outputScriptFile(preScript, preScriptContentsReadable);
      }
    }
  } catch (error) {
    throw new Error(`compileScript - ${error}`);
  }
};

const main = () => {
  // initial run
  compileScript();

  // further changes
  chokidar.watch([WATCH_PRE_SCRIPT_DIRECTORY, WATCH_RESPONSES_DIRECTORY, WATCH_UTIL_DIRECTORY]).on('change', (event, path) => {
    console.log('change observed');
    compileScript();
  });
};

// QUICK REFERENCE
// this is how the import statements will look like.
// import 'responses/guide.js';
// it takes from

main();