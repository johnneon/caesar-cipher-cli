exports.changePosition = (char, string, shift) => {
  let position = (string.indexOf(char) + shift) % string.length;
  position = position < 0 ? string.length + position : position;
  return string[position];
}