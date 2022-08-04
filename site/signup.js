const botaoLogin = document.querySelector('.botao__login');
const botaoRegister = document.querySelector('.botao__registro');
const formLogin = document.querySelector('.login__form');
const formRegister = document.querySelector('.register__form');

botaoLogin.addEventListener('click', () => {
    const exibirFormLogin = formLogin.style.display = 'flex'

    if (exibirFormLogin) {
        formRegister.style.display = 'none'
    }
})

botaoRegister.addEventListener('click', () => {
    const exibirFormRegister = formRegister.style.display = 'flex'

    if (exibirFormRegister) {
        formLogin.style.display = 'none';
    }
})
