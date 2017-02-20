const fs = require('fs');
const less = require('less');

const convert = data => new Promise((resolve, reject) => {
  less.render(data.less)
  .then(output => resolve({
    css:      output.css,
    filename: data.filename,
  }))
  .catch(reject);
});

const readFile = filename => new Promise((resolve, reject) => {
  fs.readFile(`less/${filename}`, 'utf8', (err, lessData) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        filename,
        less: lessData,
      });
    }
  });
});

const writeFile = data => new Promise((resolve, reject) => {

  const filePath = `css/${data.filename.replace('.less', '.css')}`;

  fs.writeFile(filePath, data.css, 'utf8', err => {
    if (err) reject(err);
    else resolve();
  });

});

const convertFile = filename => new Promise((resolve, reject) => {
  readFile(filename)
  .then(convert)
  .then(writeFile)
  .then(resolve)
  .catch(reject);
});

const readDir = () => new Promise((resolve, reject) => {
  fs.readdir('less', (err, filenames) => {
    if (err) reject(err);
    else resolve(filenames);
  });
});

readDir()
.then(filenames => Promise.all(filenames.map(convertFile)))
.then(() => console.log('All LESS files successfully converted.'))
.catch(console.error);
