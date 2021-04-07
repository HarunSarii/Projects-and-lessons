/* eslint-disable linebreak-style */
/* eslint-disable prefer-arrow-callback */

const btn = document.getElementById('btn');
const output = document.getElementById('outputbox');
const number = Math.floor(Math.random() * 100);
btn.addEventListener('click', () => {
  const input = document.getElementById('userInput').value;
  // eslint-disable-next-line eqeqeq
  if (input == number) {
    output.innerHTML = `You guessed right, the number was ${number}.`;
  } else if (input < number) {
    // eslint-disable-next-line quotes
    output.innerHTML = `You guessed too LOW!`;
  } else {
    // eslint-disable-next-line quotes
    output.innerHTML = `You guessed too HIGH!`;
  }
});
