const { Transform } = require('stream');
const { caesarCipher } = require('../encryption/cipher');

exports.transformStream = (shift) => {
  return new Transform({
    transform(chunk, _, callback) {
      this.push(caesarCipher(chunk.toString(), shift));
      callback();
    }
  });
};