document.getElementById('login-submit').addEventListener('click', function () {
    const inputUserEmail = document.getElementById('user-email');
    const userEmail = inputUserEmail.value;
    const inputUserPassword = document.getElementById('user-password');
    const userPassword = inputUserPassword.value;

    // console.log(userEmail ,userPassword)
    
    if (userEmail === 'maidul@gmail.com' && userPassword === '123') {
        window.location.href = 'http://127.0.0.1:5500/banking.html';
    } else {
        console.log('wring');
    }

});