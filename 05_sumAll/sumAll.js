const sumAll = function (a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  let min;
  let max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  let debugStr = "";
  let sum = 0;
  for (let i = min; i <= max; i++) {
    debugStr += i == min ? `${i} ` : `+ ${i} `;

    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
