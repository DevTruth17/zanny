const headerBackground = document.querySelector(".header")
let numberOfImage = 10
let i = 1
function changeHeaderBg() {
    headerBackground.style.background = `url('./images/zanny-${i}.jpg')`
    headerBackground.style.backgroundSize = "100% 100%"
    headerBackground.classList.add("header-bg")
    document.getElementById("logo").style.opacity = "0.7"
    i = (i+1) % numberOfImage
}
setInterval(changeHeaderBg,2000)

const navBtn = document.getElementById("nav-btn")
const links = document.querySelector(".header-links")

navBtn.addEventListener("click", ()=> {
    links.classList.toggle("nav-mobile")
    document.querySelector(".nav-btn i").classList.toggle("fa-xmark")
})

const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const productImages = document.querySelectorAll(".image")
let counter = 0

leftBtn.addEventListener("click", ()=> {
    productImages.forEach((image, index) => {
        if(counter > 0)
        image.style.transform = `translateX(${-100*(counter-1)}%)`
    })
    counter--
    if(counter < 1) counter = 0
})

rightBtn.addEventListener("click", ()=> {
    productImages.forEach((image, index) => {
        if(counter === 3) counter = -1
        if(counter < 3)
        image.style.transform = `translateX(${-100*(counter+1)}%)`
    })
    counter++
})
