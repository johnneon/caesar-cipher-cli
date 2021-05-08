const { promises, constants } = require('fs');

exports.checkOptions = ({ shift, action, input, output }) => {
  const { access } = promises;
  const { R_OK, W_OK } = constants

  if (!action || !shift) {
    console.error("action and shift are required");
    process.exit(9);
  }

  if (action !== 'encode' && action !== 'decode') {
    console.log(action);
    console.error("invalid action, allowed actions: encode, decode");
    process.exit(9);
  }

  if (input) {
    access(input).catch(() => {
      console.error("invalid path or file does not exist");
      process.exit(9);
    });
  }

  if (output) {
    access(output, R_OK | W_OK).catch(() => {
      console.error('cannot access');
      process.exit(9);
    });
  }
};