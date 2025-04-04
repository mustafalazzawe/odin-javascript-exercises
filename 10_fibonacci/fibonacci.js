const fibonacci = function (num) {
  if (typeof num !== "number") num = +num;

  if (num < 0) return "OOPS";
  if (num == 0) return 0;

  let f1 = 0;
  let f2 = 1;

  let curr;
  for (let i = 0; i < num; i++) {
    curr = f1 + f2;

    f2 = f1;
    f1 = curr;
  }

  console.log(curr);

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
