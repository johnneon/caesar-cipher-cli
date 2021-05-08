const { changePosition } = require("./changePosition");

exports.caesarCipher = (input, shift) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const result = Array.prototype.map.call(input, (char) => {
    if (lowerCase.includes(char)) {
      return changePosition(char, lowerCase, shift);
    }
    if (upperCase.includes(char)) {
      return changePosition(char, upperCase, shift);
    }
    return char;
  }).join('');

  return result;
};;
