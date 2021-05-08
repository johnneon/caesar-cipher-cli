const { createWriteStream } = require('fs');

exports.outputStream = (filename) => {
  if (filename) {
    try {
      return createWriteStream(filename, { flags: 'a+' });
    } catch (error) {
      console.error(error);
      process.exit(9);
    }
  }

  return process.stdout;
};