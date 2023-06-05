const loginInput = document.querySelector('.login-input');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form')

const validarInput =({target}) => {
    if(target.value.length > 2){
        loginBtn.removeAttribute('disabled');
        return;
    } 

    loginBtn.setAttribute('disabled', '');
}

const handleSubmt = (event) =>{
    event.preventDefault();

    localStorage.setItem('player', loginInput.value)
    window.location = 'pages/game.html'
}



loginInput.addEventListener('input', validarInput);
loginForm.addEventListener('submit', handleSubmt);