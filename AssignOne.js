// Welcome to your first assignment.
// Add your code here. You can do it!

// Part 1: 

// let name = 'Chelsey';
// let firstQuestion = 'True or false: 5000 meters = 5 kilometers.';
// let correctAnswer = "true"; 
// let inputAnswer = "true"; 

// const input = require('readline-sync');
// name = input.question("Please enter your name: ");

// answer = input.question("Question # 1: Please answer with 'True' or 'False': 5000 meters = 5 kilometers.");
// answer = ans.toLowerCase();

// if (answer === 'true') {
//   console.log(`Good job, ${name}! That is the correct answer!`);
// } else {
//   console.log(`Oh no, ${name}! This answer is incorrect.`);
// }


// Part 2 //

// const input = require('readline-sync');
// name = input.question("Please enter your name: ");

// let questions = ['True or false: 5000 meters = 5 kilometers.', '(5 + 3)/2 * 10 = ?', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', 'Who was the first American woman in space?', 'What is the minimum crew size for the International Space Station (ISS)?'];
// let answers = ['true', '40', 'Trajectory', 'Sally Ride', '3'];

// response = input.question(questions[0]);
// response = response.toLowerCase();

// if (response === answers[0]) {
//   console.log(`Correct! \nYour response: '${response}' \nCorrect response: '${answers[0]}'`);
// } else {
//   console.log(`Incorrect.\nYour response: '${response}' \nCorrect response: '${answers[0]}'`);
// }


// Part 3

const input = require('readline-sync');
name = input.question("Candidate Name: ");

let questions = ['1) True or false: 5000 meters = 5 kilometers.', '2) (5 + 3)/2 * 10 = ?', '3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', '4) Who was the first American woman in space?', '5) What is the minimum crew size for the International Space Station (ISS)?'];
let answers = ['true', '40', 'trajectory', 'sally ride', '3'];


let correctResponses = 0;
let questionsAsked = 5;

for (let i = 0; i < questions.length; i++) {
  response = input.question(`\n${questions[i].toLowerCase()}`);
  console.log(`Your Answer: ${response}`);
  console.log(`Correct response: ${answers[i]} \n`);
  if (response === answers[i]) {
  correctResponses = ++correctResponses;
}
}

let overallGrade = correctResponses / questionsAsked*100;

console.log(`>>> Overall Grade: ${overallGrade}% (${correctResponses} of ${questionsAsked} responses correct) <<<`);

if (overallGrade >= 80) {
  console.log(`>>> Status: PASSED <<<`);
} else if (overallGrade <= 79) {
  console.log('>>> Status: FAILED <<<');
}




