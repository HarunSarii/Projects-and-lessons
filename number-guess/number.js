const btn = document.getElementById("btn");
const output = document.getElementById("outputbox");

let number = Math.floor(Math.random() * 100);

btn.addEventListener("click", function () {
let input = document.getElementById("userInput").value;
if(input == number){
    output.innerHTML = `You guessed right, the number was ${number}.`
} else if (input < number) {
    output.innerHTML = `You guessed too low!`
} else {
        output.innerHTML = `You guessed too high!`
}
});
