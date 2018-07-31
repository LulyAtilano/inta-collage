$(document).ready(function() { 
    $(".dropdown-trigger").dropdown();
});

let btnLogin = document.getElementById('buttonLogin');
btnLogin.addEventListener('click', validatePassword);

function validatePassword () {
    let passwordInput = document.getElementById('password').value;
    console.log(passwordInput);


}

let emaildInput = document.getElementById('email').value;
console.log(emaildInput);
