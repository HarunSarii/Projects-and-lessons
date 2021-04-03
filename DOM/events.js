/* eslint-disable linebreak-style */
const btn = document.querySelector('#v2');

// eslint-disable-next-line func-names
btn.onclick = function () {
  console.log('you clicked me');
  console.log('I hope it worked');
};

function scream() {
  console.log('AAAAAAAHHH');
  console.log('stop touching me');
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  // eslint-disable-next-line no-alert
  alert('you clicked h1!');
};
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
  // eslint-disable-next-line no-alert
  alert('clickeddd!!!');
});
