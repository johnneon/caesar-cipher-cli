exports.caesarCipher = (input, shift) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const result = Array.prototype.map.call(input, (char) => char).join('');

  return result;
};