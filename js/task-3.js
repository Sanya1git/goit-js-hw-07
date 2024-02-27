const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    const textOutput = event.currentTarget.value.trim();
    textOutput.length > 0 ? output.textContent = textOutput : output.textContent = "Anonymous" 
});