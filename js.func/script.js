const age = 25;
const weight = 90;
const height = 190;



function whoAreYou(age, weight, height) {
  let res;

  if (!Number.isInteger(age)) {
    res = "it is not a number";
  } else if (age < 1) {
    res = "wrong symbol";
  } else if (age < 25) {
    res = "You are too young";
  } else if (age > 25) {
    res = "You are too old";
  }  else if (!Number.isInteger(weight)) {
    res = "it is not a number";
  }else if (weight < 1) {
    res = "wrong symbol";
  } else if (weight < 90) {
    res = "You are too slim";
  } else if (weight > 90) {
    res = "You are too fat";
  } else if (!Number.isInteger(height)) {
    res = "it is not a number";
  } else if (height < 1) {
    res = "wrong symbol";
  } else if (height < 190) {
    res = "You are too short";
  } else if (height > 190) {
    res = "You are too big";
  } else {
    res = "You are perfect";
  }
  return res;
}

console.log(whoAreYou(25, 98, 190));
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