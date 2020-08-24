let list = document.querySelector('ul.carousel-list')
let listItem = document.querySelectorAll('li.carousel-item')
let buttonNext = document.getElementsByClassName('button-next')[0]
let buttonPrev = document.getElementsByClassName('button-prev')[0]

let carouselItem = document.querySelectorAll('div.carouse-menu-item')
carouselItem[0].classList.add('active')
carouselItem[0].style.opacity = 1

let position = 0
let clientWidth = window.innerWidth
let currentIndex = 0

buttonNext.addEventListener('click', function(event) {
    if (currentIndex == listItem.length - 1) return
    currentIndex += 1
    changeClassActive()
    position += clientWidth
    list.style.transform = `translateX(-${position}px)`
    
})

buttonPrev.addEventListener('click', function(event) {
    if (currentIndex == 0) return
    currentIndex -= 1
    changeClassActive()

    console.log(position)
    console.log(clientWidth)
    position = position - clientWidth
    console.log(position)
    console.log(clientWidth)
    list.style.transform = `translateX(+${position}px)`
    
})

function changeClassActive() {
    carouselItem.forEach(item => {
        item.classList.remove('active')
        item.style.opacity = 0.5
    })
    carouselItem[currentIndex].classList.add('active')
    carouselItem[currentIndex].style.opacity = 1
}