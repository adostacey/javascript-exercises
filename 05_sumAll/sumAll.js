const sumAll = function (start, end) {
  const args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] != "number" || args[i] < 0) {
      return "ERROR";
    }
  }

  let sum = 0;

  if (start < end) {
    while (start <= end) {
      sum += start;
      start++;
    }
  } else {
    while (start >= end) {
      sum += end++;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
