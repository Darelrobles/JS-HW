// const x = 55;
// const y = 5;

// function sum(a, b) {
//   const mySum = a + b;
//   return mySum;
// }

// const sum1 = sum(x, y);

// console.log(sum1);

// function min(a, b) {
//   const myMin = a - b;
//   return myMin;
// }

// const min1 = min(x, y);

// console.log(min1);

// function mul(a, b) {
//   const myMul = a * b;
//   return myMul;
// }

// const mul1 = mul(x, y);

// console.log(mul1);

// function div(a, b) {
//   const myDiv = a / b;
//   return myDiv;
// }

// const div1 = div(x, y);

// console.log(div1);

// function pow(a) {
//   const myPow = a ** 2;
//   return myPow;
// }

// const pow1 = pow(x);

// console.log(pow1);

"==============";

// const age = 25;
// const weight = 90;
// const height = 190;

// function whoAreYou(a, b, c) {
//   let res;
//   if (age < 25) {
//     res = "You are too young";
//   } else if (age > 25) {
//     res = "You are too old";
//   } else if (weight < 90) {
//     res = "You are too slim";
//   } else if (weight > 90) {
//     res = "You are too fat";
//   } else if (height < 190) {
//     res = "You are too short";
//   } else if (height > 190) {
//     res = "You are too big";
//   } if(age===25, weight===90, height===190) {
//     res = 'You are perfect'
//   }
//   return res;
// }

// console.log(whoAreYou(25, 90, 190));

const age = 25;
const weight = 90;
const height = 190;



function whoAreYou(age, weight, height) {
  let res;
  // if (typeof age === 'number') {
  //   res = 'value is a number';
  // } else {
  //   res = 'value is NOT a number';
  // } 
  // if (typeof weight === 'number') {
  //   res = 'value is a number';
  // } else {
  //   res = 'value is NOT a number';
  // } 
  // if (typeof height === 'number') {
  //   res = 'value is a number';
  // } else{
  //   res = 'value is NOT a number';
  // }
  if (age === 0) {
    res = "wrong symbol";
  } else if (typeof age === 'string') {
    res = "use numbers";
  } else if (age < 25) {
    res = "You are too young";
  } else if (age > 25) {
    res = "You are too old";
  }  else if (typeof weight === 'string') {
    res = "use numbers";
  }else if (weight === 0) {
    res = "wrong symbol";
  } else if (weight < 90) {
    res = "You are too slim";
  } else if (weight > 90) {
    res = "You are too fat";
  } else if (typeof height === 'string') {
    res = "use numbers";
  } else if (height === 0) {
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

// const name = "Nicholas";
// console.log("Hello " + name);
// if (name.length > 7) {
//   console.log("wow, you have a REALLY long name");
// }

// const name1 = "Aaron";
// console.log("Hello " + name1);
// if (name1.length > 7) {
//   console.log("wow, you have a REALLY long name");
// } else {
//   console.log("Wow, you have a REALLY nice name");
// }

// function calc(a, b, op) {
//   let res;
//   if (op === "+") {
//     res = a + b;
//   }
//   if (op === "-") {
//     res = a - b;
//   }
//   if (op === "*") {
//     res = a * b;
//   }
//   if (op === "/") {
//     res = a / b;
//   }
//   if (op === "**") {
//     res = a ** b;
//   }
//   return res;
// }
// console.log(calc(5,6,"+"));
// console.log(calc(2,5,"**"));
// console.log(calc(9,8,"-"));
// console.log(calc(85,7,"/"));
// console.log(calc(9,9,"*"));

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
