// console.time('alert_ornek');
// alert('merhaba');
// console.timeLog('alert_ornek');
// console.log('devam eden işler...');
// console.timeEnd('alert_ornek');
const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now() - startTime}ms\t\t${input}`);
};

const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 500000000);
  return 'task is completed.';
};

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   const result = sconsole.log(lowTask();
//   console.log(result);

//   let pElem = document.createElement('p');
//   pElem.innerHTML = `This is newly-added paragraph`;
//   document.body.appendChild(pElem);
// });
// setTimeout(() => {
//   console.log('time ended');
// }, 0);

// console.log('time started');
// console.log(slowTask());

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log(slowTask());
//   }, 0);
//   console.log('task done');
//   let pElem = document.createElement('p');
//   pElem.innerHTML = `This is newly-added paragraph`;
//   document.body.appendChild(pElem);
// });

function brewTea() {
  /* --- */
  return 'brewTea done';
}

function prepareBreakfast() {
  /* --- */
  return 'prepareBreakfast done';
}

function makeBreakfast() {
  /* --- */
  return 'makeBreakfast done';
}

function drinkTea() {
  /* --- */
  return 'drinkTea done';
}

function breakfastTime() {
  myLog(makeBreakfast());
  myLog(drinkTea());
  myLog(' all finished');
}

// setTimeout(() => {
//   myLog(brewTea());
//   setTimeout(breakfastTime, 1000);
// }, 2000);
// setTimeout(() => {
//   myLog(prepareBreakfast());
// }, 2000);
// // for (let index = 0; index < 10; index++) {
// //   console.log('object');
// // }

function successHandler(response) {
  console.log(response);
}

function errorHandler(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
