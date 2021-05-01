const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now() - startTime}ms \t\t${input}`);
};

const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 500000000);
  return "task is completed.";
};

// myLog("1. Synchronous");

// setTimeout(() => {
//   slowTask();
//   myLog("2. Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   slowTask();
//   myLog("3. Promise");
// });

// myLog("4. Synchronous");

// const myPromise = new Promise((resolve, reject) => {
//   console.log("promise started");
//   /* ---- */
//   resolve("task completed");
// });

// myPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const myPromise = new Promise((resolve, reject) => {
  myLog("promise started");
  /* ---- */
  resolve("task completed");
});

myPromise
  .then((msg) => {
    myLog(msg);
  })
  .catch((err) => {
    myLog(err);
  });

const brewTea = newPromise()
  .resolve()
  .then(() => {});
