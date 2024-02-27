function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
let inputNew

create.addEventListener("click", () => {
  input.focus();
  if (input.value > 0 && input.value <101) {     
    createChek(input.value);
    input.value = '';
  }else{
    alert('Amount is not correct')    
  } 
  
});

let boxesNew
let boxesChek 

destroy.addEventListener("click", () => {
  input.value = '';    
   boxes.innerHTML = "";   
  
 });


function createChek (amount) {
  boxes.innerHTML = "";
  boxesNew = 30;
  for (let i = 1; i <= amount; i += 1) {
    boxesChek = `<div style="width: ${boxesNew}px; height: ${boxesNew}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", boxesChek);
    boxesNew += 10;
  }
}