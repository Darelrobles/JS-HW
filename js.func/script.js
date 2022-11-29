let a = 15;
let b = 32;

function sumPlus(a, b) {
  const mySum = a + b;
  return mySum;
}

const sum1 = sumPlus(a, b);

console.log(sum1);

/*------------*/

function whoAreYou(age, weight, height) {
  let res;

  if (!Number.isInteger(age)) {
    res = "oops!!! wrong symbol";
  } else if (age < 18 || age > 60) {
    res = "you must be from 18 to 60 years old";
  } else if (!Number.isInteger(weight)) {
    res = "oops!!! wrong symbol";
  } else if (weight < 50 || weight > 120) {
    res = "your age is ok, but you must have from 50 to 120 kg";
  } else if (!Number.isInteger(height)) {
    res = "oops!!! wrong symbol";
  } else if (height < 160 || height > 210) {
    res = "your age and weight is ok, but soory. we need only from 160cm to 210cm high people";
  } else {
    res = "You are perfect";
  }
  return res;
}

console.log(whoAreYou(17, 49, 159));
console.log(whoAreYou(25, 90, 192));
console.log(whoAreYou(15, 90, 190));
console.log(whoAreYou(0, 90, 190));
console.log(whoAreYou(25, 0, 0));
console.log(whoAreYou(25, 90, 0));
console.log(whoAreYou("a;sdf", 90, "0"));
console.log(whoAreYou(25, 90, "0"));
console.log(whoAreYou(25, "oleh", "0"));
console.log(whoAreYou(25, 90, 190));
console.log(whoAreYou(25, -1, -1));
console.log(whoAreYou(25, 90, -1));
console.log(whoAreYou(-1, 90, 190));
