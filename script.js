"use strict";
// Identifying all reusable variables
const secretNumber = document.querySelector(".number"),
  message = document.querySelector(".message"),
  score = document.querySelector(".score"),
  highestScore = document.querySelector(".highscore");

// Getting the heighest score from local stoage and start generating the secret number
highestScore.textContent = localStorage.getItem("highestScore");
let rightSecretNumber = Math.ceil(Math.random() * 20);

// Check button click algorithm
document.querySelector(".check").addEventListener("click", () => {
  let guessedNumber = document.querySelector(".guess").value;
  if (!guessedNumber) {
    dispalyMessage("⛔ No number entered");
  } else if (guessedNumber != rightSecretNumber) {
    if (score.textContent > 1) {
      dispalyMessage(
        guessedNumber > rightSecretNumber ? "Too high 📈" : "Too low 📉"
      );
      score.textContent--;
    } else {
      dispalyMessage("You lost 💥");
      score.textContent = 0;
      document.querySelector("body").style.backgroundColor = "#DC3545";
      document.querySelector(".check").setAttribute("disabled", "");
      secretNumber.style.width = "30rem";
      secretNumber.textContent = rightSecretNumber;
      document.querySelector(".left").style.display = "none";
    }
  } else if (guessedNumber == rightSecretNumber) {
    dispalyMessage("Corret number...🎉");
    secretNumber.textContent = rightSecretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347 ";
    document.querySelector(".left").style.display = "none";
    secretNumber.style.width = "30rem";
    if (highestScore.textContent < score.textContent) {
      localStorage.setItem("highestScore", +score.textContent);
      highestScore.textContent = localStorage.getItem("highestScore");
    }
  }
});

// Again button click algorithm
document.querySelector(".again").addEventListener("click", () => {
  secretNumber.textContent = "?";
  rightSecretNumber = Math.ceil(Math.random() * 20);
  score.textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").removeAttribute("disabled");
  secretNumber.style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".left").style.display = "flex";
  message.textContent = "Start guessing...";
});

// Displaing message function
function dispalyMessage(displayedMessage) {
  message.textContent = displayedMessage;
}
