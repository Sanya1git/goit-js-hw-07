function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const color = document.querySelector('.color')
const body = document.querySelector('body')
let colorNew
const newColor = () =>{
  colorNew = getRandomHexColor();
  body.style.backgroundColor = colorNew;
  color.textContent = colorNew; 
}
button.addEventListener("click", newColor);


