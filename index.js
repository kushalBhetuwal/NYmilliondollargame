const buttons = document.querySelectorAll('button');
let index =0;
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}
function focusnext() {
  if (index < buttons.length) {
    buttons[index].focus();
    console.log(buttons[index]);
    index++;
  }
}


buttons.forEach((button) => {
    button.addEventListener("keydown", function (event) {
        if (!isLetter(event.key)) {
            event.preventDefault();
        } else {
                button.innerText = event.key;
                focusnext();
            
        }
    });
});
