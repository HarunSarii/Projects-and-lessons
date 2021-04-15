const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');
score0Elm.textContent = 0;
score1Elm.textContent = 0;

const diceElm = document.querySelector('.dice');
diceElm.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', clickRollDice);

function clickRollDice() {
  diceElm.classList.remove('hidden');
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceElm.src = `dice-${diceNumber}.png`;
}
















// const btnRoll = document.querySelector('.btn--roll');

// btnRoll.addEventListener('click', clickRollDice);

// let activePlayer = 0;

// let currentScore = 0;
// const currentScoreElm0 = document.getElementById('current--0');

// // const currentScoreElms = [];
// // for (let i = 0; i < 2; i++) {
// //   currentScoreElms.push(document.getElementById(`current--${i}`));
// // }
// const currentScoreElms = document.querySelectorAll('.current-score');

// const sectionPlayers = document.querySelectorAll('.player');

// function clickRollDice() {
//   diceElm.classList.remove('hidden');
//   const diceNumber = Math.trunc(Math.random() * 6 + 1);
//   // console.log(diceNumber);
//   diceElm.src = `dice-${diceNumber}.png`;
//   if (diceNumber === 1) {
//     currentScore = 0;
//     currentScoreElms[avtivePlayer].textContent = 0;
//     activePlayer = 1 - activePlayer;
//   }
//   currentScore += diceNumber;
//   // currentScoreElm0.textContent = currentScore;
//   currentScoreElms[activePlayer].textContent = currentScore;
// }
