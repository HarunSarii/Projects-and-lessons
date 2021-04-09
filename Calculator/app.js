const valueEl = document.querySelector('.value');
const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const substractionEl = document.querySelector('.substraction');
const divisionEl = document.querySelector('.division');
const multiplicationEl = document.querySelector('.multiplication');
const equalEl = document.querySelector('.equal');
const decimalEl = document.querySelector('.decimal');

const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
  number0El, number1El, number2El, number3El, number4El,
  number5El, number6El, number7El, number8El, number9El
];

//Functions:

const getValueAsStr = () => {
    const currentDisplayStr = valueEl.textContent;
    return currentDisplayStr;
}
const handleNumberClick = (numStr) => {
  const currentDisplayStr = getValueAsStr();
  if(currentDisplayStr === '0') {
      valueEl.textContent = numStr;
  } else {
      valueyEl.textContent = parseFloat(currentDisplayStr + numStr).toLocaleString();
  }
};


for(let i =0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
    });
}