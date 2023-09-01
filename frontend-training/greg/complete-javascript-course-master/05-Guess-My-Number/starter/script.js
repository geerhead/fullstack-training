// 'use strict';
// //
// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Hello World!!';
// // document.querySelector('.number').textContent = '13';
// // document.querySelector('.score').textContent = '20';
// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
//
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = '?';
// let originalMessage = document.querySelector('.message').textContent;
// let score = document.querySelector('.score').textContent;
//
// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//
//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//     //When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       "That's the correct number!";
//     let backgroundColor = '#60b347';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('body').style.backgroundColor = 'green';
//   } else if (score > 1) {
//     // When number is too high
//     if (guess > secretNumber) {
//       document.querySelector('.message').textContent =
//         'That guess is too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else if (guess < secretNumber) {
//       //When number is too low
//       document.querySelector('.message').textContent = 'That guess is too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//   }
// });
//
// document.querySelector('.again').addEventListener('click', () => {
//   let originalBackgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor =
//     originalBackgroundColor;
//   document.querySelector('.message').textContent = originalMessage;
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });
//
// // Coding Challenge #1
//
// /*
//  Implement a game reset functionality, so that hte player can make a new guess! Here is how:
//
//  1. Select the element with the 'again' class and attach a click event handler
//  2. In the handler function, restore initial values of the score and number variables
//  3. Restore the initial conditions of the message, secretNumber, score, and guess input field
//  4. Also restore the original background color (#222) and number width (15rem)
//  */
