const buttons = document.querySelectorAll('button');
let index =0;
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

buttons.forEach((button) => {
    button.addEventListener('keydown', (event) => {
        if (!isLetter(event.key)) {
            event.preventDefault();
        } else {
            if (button.innerText.trim() === "") {
                button.innerText = event.key;
                button[index].focus()
                index++;
            }
        }
    });
});
