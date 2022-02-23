
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const imgs = document.querySelectorAll(".img");
let currentElement = 0;
const imgContainer = document.querySelector(".img-container")

prev.addEventListener("click", (e)=>{
    if (currentElement === 0) {
        currentElement = imgs.length-1;
        imgContainer.style.transform = `translate(${currentElement*-100}%)`;
    } else {
        imgContainer.style.transform = `translate(${(currentElement-1)*-100}%)`;
        currentElement--;
    }
});

next.addEventListener("click", (e)=>{
    if (currentElement === imgs.length-1) {
        currentElement = 0;
        imgContainer.style.transform = `translate(${(currentElement)*-100}%)`;
    } else {
        imgContainer.style.transform = `translate(${(currentElement+1)*-100}%)`;
        currentElement++;
    }

});