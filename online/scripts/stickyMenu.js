let menu = document.querySelector('nav.main-nav-menu');
let element = document.querySelector('div.main-nav-container');
console.log(menu);

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) { 
        menu.style.height = '0';
        element.style.opacity = '0';
    }else {
        menu.style.height = '70px'
        element.style.opacity = '1';
    }
})