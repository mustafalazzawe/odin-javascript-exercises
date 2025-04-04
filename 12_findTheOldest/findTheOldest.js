const calculateAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }

  return death - birth;
};

const findTheOldest = function (arr) {
  const temp = arr.reduce((currOldest, person) => {
    let prevAge = calculateAge(currOldest.yearOfBirth, currOldest.yearOfDeath);
    let currAge = calculateAge(person.yearOfBirth, person.yearOfDeath);

    return currAge > prevAge ? person : currOldest;
  });

  console.log(temp);

  return temp;
};

const findOldestWithSort = function (arr) {
  const sorted = arr.toSorted((a, b) => {
    let aAge = calculateAge(a.yearOfBirth, a.yearOfDeath);
    let bAge = calculateAge(b.yearOfBirth, b.yearOfDeath);

    return bAge - aAge;
  });

  console.log(sorted[0]);

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
