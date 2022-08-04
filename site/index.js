const botaoMenu = document.querySelector('.menu__lateral-botao')
const menu = document.querySelector('.menu__lateral')
const audio = document.querySelector('.destaques__produtores-audio')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral-ativo')
})