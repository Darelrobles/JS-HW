const x = 55;
const y = 5;

function sum(a, b) {
  const mySum = a + b;
  return mySum;
}

const sum1 = sum(x, y);

console.log(sum1);

function min(a, b) {
  const myMin = a - b;
  return myMin;
}

const min1 = min(x, y);

console.log(min1);

function mul(a, b) {
  const myMul = a * b;
  return myMul;
}

const mul1 = mul(x, y);

console.log(mul1);

function div(a, b) {
  const myDiv = a / b;
  return myDiv;
}

const div1 = div(x, y);

console.log(div1);

function pow(a) {
  const myPow = a ** 2;
  return myPow;
}

const pow1 = pow(x);

console.log(pow1);

function calc(a, b, op) {
  let res;
  if (op === "+") {
    res = a + b;
  }
  if (op === "-") {
    res = a - b;
  }
  if (op === "*") {
    res = a * b;
  }
  if (op === "/") {
    res = a / b;
  }
  if (op === "**") {
    res = a ** b;
  }
  return res;
}

console.log(calc(5,6,"+"));

console.log(calc(2,5,"**"));


// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
// ];

// function checkObject(arr) {
//   const result = Array.isArray(arr);

//   if (result) {
//     console.log(`[${arr}] is an array`);
//   } else {
//     console.log(`${arr} is not an array`);
//   }
// }

// checkObject(array);
