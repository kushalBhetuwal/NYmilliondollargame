const buttons = document.querySelectorAll(".button");
const button1 = buttons[0].children;

let index = 1;
buttonpressed = false;
let word = "CRANE";
let words = "";

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function focusnext() {
  button1[index].focus();
  buttonpressed = false;
}
count = 0;
function takeword(word1) {
  if (count > 3) {
    if (word1 === word) {
      alert("you are correct");
    } else {
      alert("you have entered the incorrect word:")
      
    }
  }
  count++;

  return;
}

Array.from(button1).forEach((button) => {
  button.addEventListener("keydown", (event) => {
    if (!isLetter(event.key)) {
      event.preventDefault();
    } else {
      if (!buttonpressed) {
        button.innerText = event.key.toUpperCase();
        words = words + button.innerText;
        buttonpressed = true;
        focusnext();
        index++;
      }
    }
    takeword(words);
  });
});
