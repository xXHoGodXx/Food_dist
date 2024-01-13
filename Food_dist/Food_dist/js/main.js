const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')
let cur = document.querySelector('#current')
let slideIndex = 0

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1

    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}

next_btn.onclick = () => {
    slideIndex++

    if (cur.textContent < 4) {
        cur.textContent = +cur.textContent + 1

    }



    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    if (cur.textContent > 1) {
        cur.textContent = +cur.textContent - 1


    }
    slideShow(slideIndex)
}






const tabcont = document.querySelectorAll('.tabcontent')
const btns = document.querySelectorAll('.tabheader__item')

let tabcontIndex = 0

let prev = 0

function tabShow(k) {
    if (k === tabcont.length) {
        tabcontIndex = 0
    }

    if (k < 0) {
        tabcontIndex = tabcont.length - 1
    }
    tabcont.forEach(tab => tab.classList.add('hide', 'fade'))
    tabcont[tabcontIndex].classList.remove('hide')
}

btns.forEach((btn, idx) => {
    btn.onclick = () => {

        tabcontIndex++
        btns[prev].classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        prev = idx
        tabShow(tabcontIndex)
    }
})

tabShow(tabcontIndex)