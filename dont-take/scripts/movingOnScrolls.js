window.onload = function() {

    let anchors = document.querySelectorAll("li.scroll-to");
    anchors[0].style.opacity = 1
    anchors[0].classList.add('active')
    
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault()
            
            anchors.forEach(anchor => {
                anchor.classList.remove('active')
                anchor.style.opacity = 0.5
            })

            anchor.classList.add('active')
            anchor.style.opacity = 1

            /* console.log(anchors) */
            /* console.log(anchor.classList) */

            let id = anchor.getAttribute('href')
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    document.body.addEventListener('wheel', scrollToDir, {passive: false})

    function scrollToDir(event) {
        event.preventDefault()
        console.log(event)
        for (let i = 0; i < anchors.length; i++) {
            if (anchors[i].classList.contains('active')) {
                if (event.deltaY > 0) {
                    if (i == anchors.length - 1) return
                    else generateEvent(anchors[i + 1])
                }
                if (event.deltaY < 0) {
                    if (i == 0) return
                    else generateEvent(anchors[i - 1])
                }
            }
        }
    }

    function generateEvent(elem) {
        let event = new Event('click')
        elem.dispatchEvent(event)
    }








    /* let currentHeight = window.pageYOffset;
    let requiredHeight
    let timer
    let scrolling = false
    document.addEventListener("mousewheel", MouseWheelHandler, {once: false})

    function MouseWheelHandler(event) {
        console.log(event)
        console.log("window height:", window.innerHeight) 
        console.log("page height:", document.body.clientHeight)
        console.log("current height:", window.pageYOffset) 
        console.log("deltaY:", event.deltaY)
        scrolling = false
        if (event.deltaY > 0) {
            console.log("required height:", window.pageYOffset + window.innerHeight)
            requiredHeight = window.pageYOffset + window.innerHeight
            scrollToBott()
        }else {
            console.log("required height:", document.body.clientHeight - window.pageYOffset)
            requiredHeight = window.pageYOffset - window.innerHeight
            scrollToTop()
        }
    } */

    /* function scrollToTop() {
        if (requiredHeight < currentHeight) {
            if (requiredHeight >= currentHeight + 5) {
                return window.scrollTo(0, requiredHeight);
            }
            currentHeight -= 30;
            window.scrollTo(0, currentHeight);
            timer = setTimeout(scrollToTop, 20);
        }else {
            clearTimeout(timer);
        }
    }

    function scrollToBott() {
        if (requiredHeight > currentHeight) {
            if (requiredHeight <= currentHeight + 5) {
                return window.scrollTo(0, requiredHeight);
            }
            document.removeEventListener("mousewheel", MouseWheelHandler)
            currentHeight += 30;
            window.scrollTo(0, currentHeight);
            timer = setTimeout(scrollToBott, 20);
        }else {
            clearTimeout(timer);
        }
    } */
}