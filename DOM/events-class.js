/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
function helloFromJsFile() {
  alert('You clicked From Js File');
}

const button3 = document.getElementById('btn3');

button3.onclick = helloFromJsFile;
// button3.onclick = eventListener;

const button4 = document.querySelector('.button4');

// 1. function
// eslint-disable-next-line no-use-before-define
button4.addEventListener('click', eventListener);

function eventListener() {
  // alert('You clicked Event Listener');
  console.log('You clicked Event Listener');

  // button4.removeEventListener('click', eventListener);
}

// 2. function
button4.addEventListener('click', () => {
  // alert('This is second function');
  console.log('This is second');
});

// eslint-disable-next-line no-return-assign
button4.addEventListener('mouseover', () => (button4.textContent = 'Over Me!'));

button4.addEventListener(
  'mouseout',
  // eslint-disable-next-line no-return-assign
  () => (button4.textContent = 'Event Listener'),
);

const div = document.querySelector("div");

div.addEventListener("dblclick", changeColor);

function changeColor() {
    const r = Math.trunc(Math.random()*255);
    const g = Math.trunc(Math.random()*255);
    const b = Math.trunc(Math.random()*255);


}
document.body.addEventListener("click", () => alert("you clicked body"));