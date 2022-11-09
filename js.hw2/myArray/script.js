const myArray = [41,33,22,33,32,36,36,17,6,27,1,3,1,27,14,24,28,19,17,2,15,42,5,25,49,44,49,37,29,7,37,4,0,2,0,12,15,11,34,7,41,28,7,20,16,10,28,21,35,30];
console.log(myArray);

myArray.length;
console.log(myArray.length);

let max = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
  if (myArray[i] > max) {
    max = myArray[i];
  }
}

console.log(max);

let min = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
  if (myArray[i] < min) {
    min = myArray[i];
  }
}

console.log(min);

const maxValue = 49;
const minValue = 0;

myArray.push(maxValue);

myArray.length;
console.log(myArray);
console.log(myArray.length);

myArray.unshift(minValue);
console.log(myArray);
console.log(myArray.length);