let elements = document.querySelectorAll('a.elem-nav');
let clientWindowHeight = window.innerHeight; 

for (let elem of elements) {
    
    elem.addEventListener('click', function(event) {
        event.preventDefault();

        let id = elem.getAttribute('href');
        document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
}

window.addEventListener('scroll', function(event) {
    let nav = document.querySelectorAll('section[id^="nav"]');

    for (let i = 0; i < elements.length; i++) {
        let elemAcnhor = document.querySelector('a[href="#' + nav[i].id + '"]').className=(
            (clientWindowHeight / 2 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1 - nav[i].offsetHeight / 2) ? 'active' : ''
        );
    }
}, false);