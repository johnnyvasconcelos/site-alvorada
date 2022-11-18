// background da barra de navegação
bodyFunction = () => {
const navbar = document.querySelector('nav')
const topbar = document.querySelector('.top-bar')
const arrow = document.querySelector('.nav-arrow')
const titleContent = document.querySelectorAll('.title-content')
const menuMobile = document.querySelector('.menu-mobile')
const subItemM = document.querySelector('.subitem-menu')
const subarrow = document.querySelector('.subitem-mobile .bx')
const body = document.querySelector('body')
const bars = document.querySelector('.bars')
const close = document.querySelector('.close')
const circle = document.querySelectorAll('.circle')
const input = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')
const resp = document.querySelector('.resposta')
const revArea = document.querySelector('.review-area')
document.addEventListener('scroll', function(e) {
    if (window.pageYOffset == 0) {
    navbar.classList.remove('grayBackground')
    topbar.classList.remove('grayBackground')
    } else if (window.pageYOffset > 0) {
    navbar.classList.add('grayBackground')
    topbar.classList.add('grayBackground')
    }
})
openMenu = (e) => {
    menuMobile.classList.toggle('show')
    body.classList.toggle('ovY')
    bars.classList.toggle('none')
    close.classList.toggle('block')
}
document.addEventListener('click', function(ev) {
    let el = ev.target
    if (el.classList.contains('menumobileitem') || el.classList.contains('menu-mobile') || el.classList.contains('mobButton') || el.classList.contains('bars')) {
        menuMobile.classList.add('show')
        body.classList.add('ovY')
        bars.classList.add('None')
        close.classList.add('Block')
    } else {
        menuMobile.classList.remove('show')
        body.classList.remove('ovY')
        bars.classList.remove('None')
        close.classList.remove('Block')
    }
})
onloadFunction = (e) => {
    setInterval(function(ev) {
        arrow.classList.toggle('active')
    }, 1000)
    setTimeout(function(ev) {
        titleContent[0].classList.add('showContent')
    }, 500)
    setTimeout(function(ev) {
        titleContent[1].classList.add('showContent')
    }, 1000)
    setTimeout(function(ev) {
        titleContent[2].classList.add('showContent')
    }, 1500)
    setTimeout(function(ev) {
        titleContent[3].classList.add('showContent')
    }, 2000)
}
loadSubitem = () => {
    subItemM.classList.toggle('showSubItemMobile')
    subarrow.classList.toggle('arrowRotate')
}
circle[1].addEventListener('click', function(e) {
    circle[1].classList.add('black')
    circle[1].classList.remove('white')
    circle[0].classList.add('white')
    circle[2].classList.add('white')
    revArea.classList.add('move-1')
    revArea.classList.remove('move-3')
    revArea.classList.remove('move-2')
})
circle[2].addEventListener('click', function(e) {
    circle[2].classList.add('black')
    circle[2].classList.remove('white')
    circle[1].classList.add('white')
    circle[0].classList.add('white')
    revArea.classList.add('move-2')
    revArea.classList.remove('move-1')
    revArea.classList.remove('move-3')
})
circle[0].addEventListener('click', function(e) {
    circle[0].classList.add('black')
    circle[0].classList.remove('white')
    circle[1].classList.add('white')
    circle[2].classList.add('white')
    revArea.classList.add('move-3')
    revArea.classList.remove('move-1')
    revArea.classList.remove('move-2')
})
clearSendF = () => {
    if (input[0].value == 0 || input[1].value == 0 || input[2].value == 0 || input[3].value == 0 || input[4].value == 0 || input[5].value == 0) {
        alert('Todos os campos devem ser preenchidos.')
        resp.innerText = ''
    } else {
        resp.innerText = ''
        resp.innerText = 'Sua mensagem foi enviada com sucesso'
        input[0].value = ''
        input[1].value = ''
        input[2].value = ''
        input[3].value = ''
        input[4].value = ''
        input[5].value = ''
        textArea.value = ''
    }
}
}
bodyFunction()