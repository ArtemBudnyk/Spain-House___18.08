
$(document).ready(function() {
    $('select').niceSelect()
})


var navbarLogo = document.querySelector('.logo')

var toggleButton = document.querySelector('.navbar-toggler')



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


// slider

$(document).ready(function() {

    $('.slider-block').slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-block-2',

        prevArrow: '<button class="btn slider-btn slider-prev"><img src="assets/img/slider-prev-arrow.png" alt="arrow-left"></button>',
        nextArrow: '<button class="btn slider-btn slider-next"><img src="assets/img/slider-next-arrow.png" alt="arrow-right"></button>',
    });

    $('.slider-block-2').slick({
        Infinity: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        asNavFor: '.slider-block',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
})


















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




// const baner = document.querySelector('.first-screen-description')

// const originalText = baner.textContent

// const shortenedText = 'РАССКАЖИТЕ НАМ О ЖИЗНИ ВАШЕЙ МЕЧТЫ, И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС'

// window.addEventListener('resize', ()=> {
//     if (window.innerWidth <= 575) {
//         baner.textContent = shortenedText
//     } else {
//         baner.textContent = originalText
//     }
// })