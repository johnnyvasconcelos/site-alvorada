// background da barra de navegação
bodyFunction = () => {
const navbar = document.querySelector('nav')
const topbar = document.querySelector('.top-bar')
const arrow = document.querySelector('.nav-arrow')
document.addEventListener('scroll', function(e) {
    if (window.pageYOffset == 0) {
    navbar.classList.remove('grayBackground')
    topbar.classList.remove('grayBackground')
    } else if (window.pageYOffset > 0) {
    navbar.classList.add('grayBackground')
    topbar.classList.add('grayBackground')
    }
})
onloadFunction = (e) => {
    setInterval(function(ev) {
        arrow.classList.toggle('active')
    }, 1000)
}
}
bodyFunction()