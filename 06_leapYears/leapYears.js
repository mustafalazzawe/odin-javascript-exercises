const leapYears = function (year) {
  // year is divisilbe by 4 => yes
  // unless year is divisible by 100 => no
  // unless year is divisible by 400 => yes

  if (year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
};

leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
