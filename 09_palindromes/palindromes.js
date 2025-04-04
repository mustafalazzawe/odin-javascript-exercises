const palindromes = function (str) {
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .join("");
  const backwards = cleaned.split("").reverse().join("");

  return cleaned === backwards;
};

const palindromesTwo = function (str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (cleaned[i] !== cleaned[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
