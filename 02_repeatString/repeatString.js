const repeatString = function (word, number) {
  let str = "";

  if (number < 0) {
    return "ERROR";
  }

  for (let i = 1; i <= number; i++) {
    str += word;
  }

  return str;
};

// Do not edit below this line
module.exports = repeatString;
