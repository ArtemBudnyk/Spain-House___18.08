// var navbarInfo = document.querySelector('.description-info')

// const { off } = require("gulp")

var navbarLogo = document.querySelector('.logo')

var toggleButton = document.querySelector('.navbar-toggler')

// var closeButton = document.querySelector('.btn-close ')

toggleButton.addEventListener('click', function() {
    navbarLogo.classList.add('width')
    const modalFadeBackdrop = document.querySelector(".modal-backdrop")

    if (modalFadeBackdrop) {
        modalFadeBackdrop.addEventListener("click", function () {
            navbarLogo.classList.remove('width')
        })
    }
})

const offCanvasCloseEI = document.querySelector(".offcanvas .btn-close")

offCanvasCloseEI.addEventListener("click", function () {
    navbarLogo.classList.toggle('width')
})












// closeButton.addEventListener('click', function() {
//     navbarLogo.classList.remove('width')
// })




// toggleButtonAdd.addEventListener('click', function() {
//     navbarLogo.classList.add('width')
// })


// toggleButton.addEventListener('click', function() {
//     console.log(toggleButton)

//     var hasChangedWidth = navbarLogo.classList.contains('width')

//     if (hasChangedWidth) {
//         navbarLogo.classList.remove('width')
//     } else {
//         navbarLogo.classList.add('width')
//     }
// })







// const toggleButton = document.querySelectorAll('.navbar-toggler')


// toggleButton.forEach(button => {
//     button.addEventListener('click', () => {

//         var hasChangedWidth = navbarLogo.classList.contains('width')

//         if (hasChangedWidth) {
//             navbarLogo.classList.remove('width')
//         } else {
//             navbarLogo.classList.add('width')
//         }
//     })
// })




const baner = document.querySelector('.first-screen-description')

const originalText = baner.textContent

const shortenedText = 'РАССКАЖИТЕ НАМ О ЖИЗНИ ВАШЕЙ МЕЧТЫ, И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС'

window.addEventListener('resize', ()=> {
    if (window.innerWidth <= 575) {
        baner.textContent = shortenedText
    } else {
        baner.textContent = originalText
    }
})