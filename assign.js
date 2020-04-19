// Code your transform function here:
function transform(oldPointStructure) {
  let newPointStructure = {};
  for(let item in oldPointStructure) {
    let letter = oldPointStructure[item];
    for (let i=0; i <letter.length; i++) {
      newPointStructure[letter[i].toLowerCase()] = Number(item);
    }
  }
  return newPointStructure;
}






// Code your initialPrompt function here:
const input = require('readline-sync');
let info = input.question (`
Welcome to the Scrabble score calculator!\n 
Which scoring algorithm would you like to use?\n 
0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.
Enter 0, 1, or 2: `);
info = Number(info);
let initialPrompt = function(response) {
console.log(`Using algorithm: ${scoringAlgorithms[info].name}`);
// return response;
};
// console.log(initialPrompt(info));










// Code your runProgram function here:
let runProgram = function(gameStart) {
  let userInput = initialPrompt ();
};




// Here is the oldScoreKey object:
// const oldScoreKey = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
// };





// // Use the transform function to create the newScoreKey object here:

let newPointStructure = transform(oldScoreKey);






// // Create your scoringAlgorithms array here:
let scoringAlgorithms = [
{
  name: "Scrabble",       
  description: "The traditional scoring algorithm.",
  scoreFunction: 
    function scrabbleScore(word, newPointStructure) {
    let score = 0;
    for(let items of word) {
      score += newPointStructure[items];
    }
      return score;
    }
},
{
  name: "Simple Score",
  description: "Each lettr is worth 1 point.",
  scoreFunction: 
  function simpleScore(word) {
  let score = 0;
  for (let i=0; i< word.length; i++) {
    score = score +1;
  }
  return score;
  }
},
{
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: function bonusVowels(words) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let score = 0;
    for (let items of words) {
      if (vowels.includes(items)) {
        score = score+3;
      } else {
        score++;
      }
    return score;
    }
  }
}
];
// console.log(scoringAlgorithms[0].name);







// // Call the runProgram function here:
console.log(runProgram(initialPrompt));