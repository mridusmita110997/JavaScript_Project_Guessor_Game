'use strict';
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start Guessing💥 ';
document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
let number = Math.random();
console.log(number);
number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const num = document.querySelector('.guess').value;
  console.log(num); //string
  console.log(typeof num);
  const guess = Number(num);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number 😒😒😒😒😒😒😒😒';
  } else if (guess === number) {
    score++;
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'correct guess 😍😉😎💖';
    document.querySelector('.score').textContent = score;
  } else if (guess > number) {
    if (score >= 1) {
      score--;
      document.querySelector('.message').textContent =
        'Too high 😒😒😒😒😒😒😒😒';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost 🙄😪😪';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < number) {
    if (score >= 1) {
      score--;
      document.querySelector('.message').textContent =
        'Too Low 😒😒😒😒😒😒😒😒';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost 🙄😪😪';
      document.querySelector('.score').textContent = score;
    }
  }
});
