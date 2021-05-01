const startTime = Date.now();
const myLog = (input) => {
  console.log(`Elapsed: ${Date.now() - startTime}ms\t\t${input}`);
};

const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 10000);
  return "task is completed";
};

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  setTimeout(() => {
    const result = slowTask();
    console.log(result);
  }, 0);

  let pElem = document.createElement("p");
  PElem.innerHTML = `This is newly added paragraph`;
  document.body.appendChild(pElem);
});

setTimeout(() => {
  console.log("time started");
}, 0);

console.log("time ended");
// console.log()
