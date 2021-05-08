const { pipeline } = require('stream');
const { inputStream } = require('./stream/inputStream');
const { outputStream } = require('./stream/outputStream');
const { transformStream } = require('./stream/transformStream');

exports.pipeline = (opts) => {
  const { shift, action, input, output } = opts;

  pipeline(
    inputStream(input),
    transformStream(shiftWay),
    outputStream(output),
    (error) => {
      if (error) {
        console.error(error);
        process.exit(9);
      }
    },
  );
};