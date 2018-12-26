const NEWLINE = "\n";
const EMPTY_STRING = "";

const whitespace = function(element) {
  return element !== "";
};

const trim = function(sourceArray) {
  return sourceArray.filter(whitespace);
};

const countLine = function(content) {
  return content.split(NEWLINE).length;
};

const countWord = function(content) {
  //how to replace regular expression?
  const potentialWords = content.split(/["\n", " "]/);//split with newline or space
  const words = trim(potentialWords);
  return words.length;
};

const countCharacter = function(content) {
  return content.split(EMPTY_STRING).length;
};  


module.exports = {
  trim,
  countLine,
  countWord,
  countCharacter
};