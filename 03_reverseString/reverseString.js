const reverseString = function (str) {
  const tempArr = str.split("");
  const reverseArr = tempArr.reverse();

  return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
