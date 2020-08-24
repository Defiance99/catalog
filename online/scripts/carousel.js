/* let next = document.querySelector('i.right-arrow-button');
let prev = document.querySelector('i.left-arrow-button');
let carousel = document.querySelector('div.carousel-list');

let carouselListWidth = document.querySelector('div.carousel-wrapper').offsetWidth; // default 700px
let elemWidth = document.querySelector('div.carousel-item img').offsetWidth;   // default 195px
let elems = document.querySelectorAll('div.carousel-item img');

let position = 0;
let countVisibleElements = 3;

next.addEventListener('click', nextSlides);
prev.addEventListener('click', prevSlides);


function nextSlides(event) {
    position -= 700;
    position = Math.max(position, -2200);
    console.log(position);
    carousel.style.transform = `translateX(${position}px)`;
}

function prevSlides(event) {
    position += 700;
    console.log(position);
    position = Math.min(position, 0);
    carousel.style.transform = `translateX(-${position}px)`
} */

const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector('i.left-arrow-button');
const rightButton = document.querySelector('i.right-arrow-button');

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);


leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})