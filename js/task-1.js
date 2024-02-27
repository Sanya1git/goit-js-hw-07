const categories = document.getElementsByClassName("item")
console.log(`Number of categories:${categories.length}`)
const categoriesName = document.querySelectorAll("h2")
categoriesName.forEach (function (elements) {
    const  categoriesName = elements.textContent;
      console.log(`Category: ${categoriesName}`);
    const elementslenght = elements.parentElement.querySelectorAll("ul > li");
      console.log(`Elements: ${elementslenght.length}`);
});