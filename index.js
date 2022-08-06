var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Использованные попытки: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Поздравляем! Вы угадали!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Неправильно!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Загаданное число БОЛЬШЕ вашего значения!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Загаданное число МЕНЬШЕ вашего значения!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Начать новую Игру!";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  guessField.focus();

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
