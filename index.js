const buttons = document.querySelectorAll("button");
const loadingDiv = document.querySelector(".info-bar");
const winLose = document.querySelector(".winLose");
const newdiv = document.querySelector(".newdiv");

async function init() {
  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  let currentGuessWord = "";
  let answer_length = 5;
  let currentRow = 0;
  const response = await fetch("https://words.dev-apis.com/word-of-the-day");
  const data = await response.json();
  const word = data.word.toUpperCase();
  let Rounds = 0;
  setLoading();

  function addLetter(letter) {
    if (currentGuessWord.length < answer_length) {
      currentGuessWord += letter;
    }
    buttons[
      answer_length * currentRow + currentGuessWord.length - 1
    ].innerText = letter;
    //css in js
    buttons[
      currentRow * answer_length + currentGuessWord.length - 1
    ].style.fontSize = "2rem";
    buttons[
      currentRow * answer_length + currentGuessWord.length - 1
    ].style.fontWeight = "bold";
  }
  taskcompleted = false;

  function handleEnter() {
    if (taskcompleted) {
      return;
    }
    if (currentGuessWord.length < answer_length) {
      return;
    }
    const countobject = lettercount(word);
    newarray = currentGuessWord.split("");

    for (let i = 0; i < answer_length; i++) {
      let key = newarray[i];
      if (key === word[i]) {
        buttons[currentRow * answer_length + i].classList.add("correct");
        countobject[key]--;
      }
    }

    for (let i = 0; i < answer_length; i++) {
      let key = newarray[i];
      if (key === word[i]) {
        //do nothing
      } else if (word.includes(key) && countobject[key] > 0) {
        buttons[currentRow * answer_length + i].classList.add("close");
        countobject[key]--;
      } else {
        buttons[currentRow * answer_length + i].classList.add("wrong");
      }
    }

    function div(string, color, font,targetDiv) {
      const h2 = document.createElement("h2");
      h2.textContent = string;
      h2.style.color = color;
      h2.style.fontSize = font;
      targetDiv.appendChild(h2);
    }

    if (currentGuessWord === word) {
      winLose.classList.add("visibility");
      div("Congrats, you have won the game!!!", "#6499E9", "4rem", newdiv);
      taskcompleted = true;
      return;
    } else {
      loadingDiv.classList.toggle("visibility");
      div("Don't give up!!", "red", "", winLose);
    }

    if (Rounds === 5) {
          winLose.classList.toggle("visibility");
          div("Sorry , you have lost", "#D83F31", "3rem",newdiv);
           taskcompleted = true;
      return;
    }

    currentGuessWord = "";
    currentRow++;
    Rounds++;
  }

  function handleBackspace() {
    if (currentGuessWord.length === 0) {
      return;
    }
    buttons[
      currentRow * answer_length + currentGuessWord.length - 1
    ].innerText = "";
    currentGuessWord = currentGuessWord.slice(0, -1);
  }

  buttons.forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (Rounds === 6) {
        return;
      }
      const action = event.key;
      if (action === "Enter") {
        handleEnter();
      } else if (action === "Backspace") {
        handleBackspace();
      } else if (isLetter(action)) {
        addLetter(action.toUpperCase());
      }
    });
  });

  function setLoading() {
    return loadingDiv.classList.add("hidden");
  }

  function lettercount(letter) {
    let object = {};
    for (let i = 0; i < letter.length; i++) {
      let key = letter[i];
      object[key] ? object[key]++ : (object[key] = 1);
    }
    return object;
  }
}

init();
