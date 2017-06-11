const storeCss = () => new Promise((resolve, reject) => {

  fs.readdir('css', 'utf8', (err, filenames) => {

    if (err) reject(err);

    Promise.all(filenames.map(filename => new Promise((resolve, reject) => {

      const contentSettings = {
        contentEncoding: 'utf8',
        contentType:     'text/css',
      };

      const cb = err => {
        if (err) reject(err);
        else resolve();
      };

      storage.createBlockBlobFromLocalFile(
        'css',
        filename,
        `css/${filename}`,
        { contentSettings },
        cb
      );

    })))
    .then(resolve)
    .catch(reject);

  });

});
