const navButton = document.querySelectorAll(".carousel__button");
const cards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
const carousel = document.querySelector(".carousel");
const carouselWidth = carousel.getBoundingClientRect().width;
const cardWidth = card.getBoundingClientRect().width;

let showCards = Math.floor(carouselWidth / cardWidth);

let move = 0;

let moveRight = () => {
    if (showCards + move === cards.length) {
        return;
    }

    move++;
    for (const i of cards) {
        i.style.left = (-cardWidth - 10) * move + "px";
    }
};
let moveLeft = () => {
    if (move === 0) {
        return;
    }
    move--;

    for (const i of cards) {
        i.style.left = (-cardWidth - 10) * move + "px";
    }
};

navButton[1].onclick = () => {
    moveRight();
};
navButton[0].onclick = () => {
    moveLeft();
};
