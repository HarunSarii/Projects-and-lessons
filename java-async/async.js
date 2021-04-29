const slowTask = () => {
  let i = 0;
  do {
    i++;
  } while (i < 1000000);
  return "task is completed";
};

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const result = slowTask();
  console.log(result);

  let pElem = document.createElement("p");
  PElem.innerHTML = `This is newly added paragraph`;
  document.body.appendChild(pElem);
});
