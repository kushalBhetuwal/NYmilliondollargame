const buttons = document.querySelectorAll("button");
console.log(buttons);
let currentGuess = "";
const answer_word = "brain";
const answer_length = answer_word.length;
let currentRow = 0; //keeping track of the current row

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function addLetter(letter) {
  if (currentGuess.length < answer_length) {
    currentGuess += letter;
  }
  buttons[answer_length * currentRow + currentGuess.length - 1].innerText =
    letter;
  //css-js
  buttons[answer_length * currentRow + currentGuess.length - 1].style.fontSize =
    "1.7rem";
  buttons[
    answer_length * currentRow + currentGuess.length - 1
  ].style.fontWeight = "bold";
}

function handleEnter() {
  if (currentGuess.length < answer_length) {
    //do nothing
    return;
  }

  //Todo validate the word
  //Todo correct word, incorrect word, correct word but in incorrect index, correct word in the correct index
  //Todo correct word in the correct index  = win
  //Todo correct word in the incorrect index, incorrect word= lose


  currentRow++;
  currentGuess = "";
}
function handleBackspace() {
  if (currentGuess == "") {
    //do nothing
    return;
  }
  buttons[answer_length * currentRow + currentGuess.length - 1].innerText = "";
  currentGuess = currentGuess.slice(0, -1);
}

buttons.forEach((button) => {
  button.addEventListener("keydown", (event) => {
    const action = event.key;
    console.log(action);
    if (action === "Enter") {
      handleEnter();
    } else if (action === "Backspace") {
      handleBackspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    }
  });
});
