const fs = require('fs');

exports.inputStream = (filename) => {
  if (filename) {
    try {
      return fs.createReadStream(filename);
    } catch (error) {
      console.error(error);
      process.exit(9);
    }
  }
  return process.stdin;
};