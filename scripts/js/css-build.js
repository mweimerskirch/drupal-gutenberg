const glob = require('glob');
const argv = require('minimist')(process.argv.slice(2));
const sass = require('node-sass');
const log = require('./log');
const path = require('path');
const fs = require('fs');

// Match only on .scss files.
const fileMatch = './**/[!_]*.scss';
// Ignore everything in node_modules
const globOptions = {
  ignore: './node_modules/**',
};

const processFiles = (error, filePaths) => {
  if (error) {
    process.exitCode = 1;
  }

  filePaths.forEach(filePath => {
    const filename = path.basename(filePath).slice(0, -5);
    const result = sass.renderSync({
      file: filePath,
      outputStyle: 'expanded', // leave minification to Drupal.
      outFile: `./css/${filename}.css`,
      sourceMap: true, // or an absolute or relative (to outFile) path
    });

    result.css = `/**\n * Don't edit this file. Find all style at ./sass folder.\n **/\n${
      result.css
    }`;

    fs.writeFile(`./css/${filename}.css`, result.css, err => {
      if (!err) {
        log(`./css/${filename}.css`);
      }
    });

    fs.writeFile(`./css/${filename}.css.map`, result.map, err => {
      if (!err) {
        log(`./css/${filename}.css.map`);
      }
    });

  });
};

if (argv.file) {
  processFiles(null, [].concat(argv.file));
} else {
  glob(fileMatch, globOptions, processFiles);
}
process.exitCode = 0;
