let scores = [0, 0];

const winScore = Number(document.getElementById("winscore").value);
const spanPlayer1 = document.getElementById("player1");
const spanPlayer2 = document.getElementById("player2");

console.log(winScore);
console.log(spanPlayer1.textContent);

const btnPlayer1 = document.getElementById("btnpl1");
btnPlayer1.addEventListener("click", player1Click);

function player1Click() {
    scores[0] += 1;
    spanPlayer1.textContent = scores[0];
}

const btnPlayer2 = document.getElementById("btnpl2");
btnPlayer2.addEventListener("click", player2Click);

function player2Click() {
    scores[1] += 1;
    spanPlayer2.textContent = scores[1];
}

btnPlayer1.addEventListener("click", increaseCounter);
btnPlayer2.addEventListener("click", increaseCounter);


function increaseCounter(event) {
    console.log(this);
}