//Define variables
let guessedNumber;
let counter = 0;
let count = document.getElementById("count");
let nrInput = document.getElementById("number-input");


//Assign number
let number = Math.floor(Math.random() * 100 +1 );


//Button click trigger
document.getElementById("check-button").addEventListener("click", function() {
    checkNumber();
})


//Enter trigger
document
.getElementById("number-input")
.addEventListener("keyup", function(event){
  if(event.code == "Enter" || event.code == "NumpadEnter") {
    checkNumber();
  }
})


//Define function
function checkNumber() {
    counter++;

    document.getElementById("count").innerHTML = "number of attempts: " + counter;
    guessedNumber = nrInput.value;

 

//get number from input


//if guessed number matched
  if (number == guessedNumber) {
    alert("You are winner! You guessed in " + counter + " times!")
  }

//play again?
  let nextGame = confirm("Do you wanna play again");

  if (nextGame) {
    number = Math.floor(Math.random() * 100 +1 );
    console.log("new number", number);

    //thanks for participating
  } else {
    count.innerHTML = "";
    document.getElementById("answer").innerHTML = "Thanks for game!"
    nrInput.value = "";
  } 
  else if (
    (guessedNumber = "" || guessedNumber > 100 || guessedNumber <= 0) 
  ){
    answer.style.color = "red";
    answer.innerText = "Write any number between 1-100";
    
  }
  else if (guessedNumber.indexOf(".") || guessedNumber.indexOf(",")) {
    answer.innerText = "This is not a natural number!";
  } else if (guessedNumber > number) {
      answer.innerText = "Please Enter Lower Number!";
  } else if (guessedNumber < number) {
    answer.innerText = "Please Enter Higher Number!";
  } else {
      answer.innerText = "Are you sure?";
  }
  
}

//Assign new number for next game




//check number 1-100 and exists



//check valid number



//check lower number


//check higher number


//otherwise


//reset and focus