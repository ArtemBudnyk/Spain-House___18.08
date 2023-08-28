// var navbarInfo = document.querySelector('.description-info')

var navbarLogo = document.querySelector('.logo')

var toggleButton = document.querySelector('.navbar-toggler')

var closeButton = document.querySelector('.btn-close ')

toggleButton.addEventListener('click', function() {
    navbarLogo.classList.add('width')
})

closeButton.addEventListener('click', function() {
    navbarLogo.classList.remove('width')
})
console.log(closeButton)



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