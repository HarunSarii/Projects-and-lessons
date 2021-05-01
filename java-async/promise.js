const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now()} - startTime}ms/t/t${input}`);
};

const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 500000000);
  return "task is completed.";
};

myLog("1. Synchronous");
