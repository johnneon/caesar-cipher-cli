const { pipeline } = require('stream');
const { checkOptions } = require('./checkOptions');
const { errorStreamHandler } = require('./stream/errorStreamHandler');
const { inputStream } = require('./stream/inputStream');
const { outputStream } = require('./stream/outputStream');
const { transformStream } = require('./stream/transformStream');

exports.pipeline = (opts) => {
  checkOptions(opts);

  const { shift, action, input, output } = opts;
  
  const shiftWay = (action === 'encode') ? +shift : shift * -1;

  pipeline(
    inputStream(input),
    transformStream(shiftWay),
    outputStream(output),
    errorStreamHandler,
  );
};