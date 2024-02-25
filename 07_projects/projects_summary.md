# Projects Summary

### JavaScript Only

## Project 1 : Theme Changer

```javascript
function themes() {
  const themes = document.getElementById("themes");
  if (themes.style.display == "grid") {
    themes.style.display = "none";
  } else {
    themes.style.display = "grid";
  }
}

function changeTheme() {
  const themes = document.querySelectorAll(".inner-theme-color-box");

  themes.forEach((theme) => {
    theme.addEventListener("click", (e) => {
      const secondaryColor = window
        .getComputedStyle(e.target)
        .getPropertyValue("background-color");

      console.log(secondaryColor);

      const primaryColor = window
        .getComputedStyle(e.target.parentElement)
        .getPropertyValue("background-color");

      // changing colors
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        secondaryColor
      );
    });
  });
}
changeTheme();
```

## Project 2 : BMI Calculator

```javascript
function reset() {
  document.querySelector("#bmi-result").innerHTML = "";
  document.querySelector("#bmi-message").innerHTML = "";
  document
    .querySelector("#bmi-result")
    .appendChild(document.createTextNode("Your BMI is : "));
  document
    .querySelector("#bmi-message")
    .appendChild(document.createTextNode("You are "));
}

function calculateBmi() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const resultSection = document.querySelector("#result-section");

    document.querySelector("#error-height")?.remove();
    document.querySelector("#error-weight")?.remove();
    reset();

    if (height === "" || height <= 0 || isNaN(height)) {
      if (!document.getElementById("error-height")) {
        const errorMessage = document.createElement("h3");
        errorMessage.setAttribute("id", "error-height");
        errorMessage.style.color = "red";
        errorMessage.appendChild(
          document.createTextNode("Please Enter Valid Height")
        );

        resultSection.appendChild(errorMessage);
      }
    } else {
      document.querySelector("#error-height")?.remove();
    }

    if (weight === "" || weight <= 0 || isNaN(weight)) {
      if (!document.getElementById("error-weight")) {
        const errorMessage = document.createElement("h3");

        errorMessage.setAttribute("id", "error-weight");
        errorMessage.style.color = "red";
        errorMessage.appendChild(
          document.createTextNode("Please Enter Valid Weight")
        );

        resultSection.appendChild(errorMessage);
      }
    } else {
      document.querySelector("#error-weight")?.remove();

      if (!document.getElementById("error-height")) {
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

        const result = document.createElement("span");

        const resultMessage = document.createElement("span");

        result.appendChild(document.createTextNode(`${bmi}`));

        if (bmi < 18.6) {
          result.style.color = "red";
          resultMessage.style.color = "red";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Under Weight"));
          document.querySelector("body").style.backgroundColor = "#ffd1d1";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
          result.style.color = "green";
          resultMessage.style.color = "green";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Healthy"));
          document.querySelector("body").style.backgroundColor = "lightgreen";
        } else {
          result.style.color = "orange";
          resultMessage.style.color = "orange";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Over Weight"));
          document.querySelector("body").style.backgroundColor = "#ffcbc5";
        }
        reset();
        document.querySelector("#bmi-result").appendChild(result);
        document.querySelector("#bmi-message").appendChild(resultMessage);
      }
    }
  });
}

calculateBmi();
```

## Project 3 : Digital Clock

```javascript
const clock = document.getElementById("clock");

// setInterval(() => {
//     const time = new Date();
//     clock.innerText = time.toLocaleTimeString(undefined,{
//         hours : '2-digit'
//     });
// }, 1000);

// More optimize approach
function updateClock() {
  const time = new Date();

  const option = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // hour12:false it will force to show 24 hour format
  };

  clock.textContent = time.toLocaleTimeString(undefined, option); // ---> here undefined means default behavior(date) of the browser;
  // if we want to display the time in the format of a particular region,
  // then we can explicitly define the locale, like for India: 'en-IN'

  requestAnimationFrame(updateClock);
}

updateClock();
```

## Project 4 : Guess The Number Game

```javascript
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
```

## Project 5 : Moving Canvas Circle with Mouse Pointer

### Javascript Events

```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here

document.addEventListener("keydown", (e) => {
  const speed = 5;
  switch (e.key) {
    case "a":
      x -= speed;
      break;
    case "d":
      x += speed;
      break;
    case "s":
      y += speed;
      break;
    case "w":
      y -= speed;
      break;
    default:
      break;
  }
  console.log(`x : ${x} , y : ${y}`);
  drawCircle(x, y, size);
});
```

## Project 6 : Changing and Setting Random Background with Start and Stop Buttons

### Async JavaScript

```javascript
let interval;
function random() {
  return Math.floor(Math.random() * 255 + 1);
}

function changeBackground() {
  const randomColorVal = `rgb(${random()},${random()},${random()})`;
  document.querySelector("body").style.backgroundColor = randomColorVal;
  console.log(`Background Color : ${randomColorVal}`);
}
document.getElementById("start").addEventListener("click", (e) => {
  if (!interval) {
    interval = setInterval(changeBackground, 1000);
  } else {
    console.log(`Already Started !`);
  }
});

document.getElementById("stop").addEventListener("click", (e) => {
  if (interval) {
    clearInterval(interval);
    console.log(
      `Current Background Color : ${
        document.querySelector("body").style.backgroundColor
      }`
    );
    console.log(`Interval : ${interval}`);
    interval = null;
  } else {
    console.log(`Already Stopped !`);
  }
});
```
