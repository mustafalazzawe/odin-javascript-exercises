const repeatString = function (str, num) {
  if (num < 0) return "ERROR";

  let finalStr = "";

  let i = 0;
  while (i < num) {
    finalStr += str;

    i++;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
