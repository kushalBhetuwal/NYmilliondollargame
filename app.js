const animate = document.querySelector(".animate");
console.log(animate);
const addingdiv = document.querySelector('.simulation')
console.log(addingdiv);


function addDiv(string, targetDiv){
  const h2 = document.createElement("h2");
  h2.textContent = string;
  targetDiv.appendChild(h2);
}

addDiv("yes kushal", animate);
addDiv("danger", addingdiv);