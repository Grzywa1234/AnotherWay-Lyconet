const password = document.querySelector('.password');
const login = document.querySelector('.login');
const word = 'presidentteam';

password.addEventListener('input', hideLogin)

function hideLogin(e) {
    if (e.target.value == word){
        login.style.display = 'none';
    }
}