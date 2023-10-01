
word = "lakemba"
let object = {};

for (let i = 0; i < word.length; i++) {
  let key = word[i];
  object[key] ? object[key]-- : (object[key] = 1);
}

console.log(object);
