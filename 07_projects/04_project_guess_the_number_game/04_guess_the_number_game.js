let play = true;

let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.getElementById("submit");
const prevGuess = document.querySelector(".guesses");
const remainingTurn = document.querySelector(".result-remaining");
const lowOrHi = document.getElementById("lowOrHi");
const startOver = document.getElementById("result-section");

const p = document.createElement("p");

let prevGuessSlot = [];
let turn = 1;

if (play) {
  console.log("inside play");
  submit.addEventListener("click", (e) => {
    console.log("inside submit");
    e.preventDefault();
    const guess = parseInt(document.getElementById("userInput").value);
    document.getElementById("userInput").value = "";
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (turn <= 10) {
    if (guess === "") {
      displayMessage(`Please Enter Some Number`, `red`);
    } else if (isNaN(guess)) {
      displayMessage(`Please Enter Number`, `red`);
    } else if (guess > 100) {
      displayMessage(`Please Enter Number Less Than or Equal to 100`, "red");
    } else if (guess < 1) {
      displayMessage(`Please Enter Number Larger Than or Equal to 1`, "red");
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations ! You Won`, "yellowGreen");
    displayGuess(guess);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your Guess is Tooo Larg`, "lightGreen");
    displayGuess(guess);
  } else {
    displayMessage(`Your Guess is Tooo Small`, "yellow");
    displayGuess(guess);
  }
}

function displayGuess(guess) {
  if (randomNumber === guess && turn === 1) {
    prevGuess.appendChild(document.createTextNode(`[ ${guess} ] `));
  } else if (randomNumber === guess) {
    prevGuess.appendChild(document.createTextNode(`${guess} ] `));
  } else if (turn === 10) {
    prevGuess.appendChild(document.createTextNode(`${guess} ] `));
    remainingTurn.style.color = "red";
    displayMessage(`Game Over ! Random Number Was ${randomNumber}`, "red");
    endGame();
  } else if (turn === 1) {
    prevGuess.appendChild(document.createTextNode(`[ ${guess} , `));
  } else {
    prevGuess.appendChild(document.createTextNode(`${guess} , `));
  }
  prevGuessSlot.push(guess);
  turn++;
  remainingTurn.textContent = `${11 - turn}`;
}

function displayMessage(message, color) {
  lowOrHi.style.color = color;
  lowOrHi.textContent = message;
}
function endGame() {
  submit.setAttribute("disabled", "");
  document.getElementById("userInput").setAttribute("disabled", "");
  document.getElementById("userInput").textContent = "";
  p.classList.add("button");
  p.setAttribute("id", "newGame");
  p.textContent = "Restart Game";
  const styles = {
    backgroundColor: "#ff3939",
    borderRadius: "9px",
    border: "4px double #212121",
    padding: "8px",
    width: "fit-content",
  };
  Object.assign(p.style, styles);
  startOver.appendChild(p);
  play = false;
  startNewGame();
}
function startNewGame() {
  const newGame = document.getElementById("newGame");
  newGame.addEventListener("click", (e) => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuessSlot = [];
    turn = 1;
    prevGuess.textContent = "";
    remainingTurn.style.color = "white";
    remainingTurn.textContent = 10;
    lowOrHi.textContent = "";
    startOver.removeChild(p);
    document.getElementById("userInput").removeAttribute("disabled");
    submit.removeAttribute("disabled");
    play = true;
  });
}
