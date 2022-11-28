// let double = function(number){
//   return number * 2;
// };

// console.log(double(5)+double(7));

// let randomNames = ["Paul", "Anna", "Otto", "Vivien", "Lisa"];
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomWords = ["Alien", "Killer", "Stupid", "Apple", "Juice"];
// console.log("Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomNames) +"'s " + pickRandomWord(randomWords) + "!!!");

let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

generateRandomInsult = function () {
  let randomNames = ["Paul", "Anna", "Otto", "Vivien", "Lisa"];
  let randomBodyParts = ["Face", "Nose", "Hair"];
  let randomWords = ["Alien", "Killer", "Stupid", "Apple", "Juice"];

  let randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " is like a " +
    pickRandomWord(randomNames) +
    "'s " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};

console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());

