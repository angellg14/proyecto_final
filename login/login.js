document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    let attempts = 0;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === 'admin' && password === '1234') {
            window.location.href = 'pag.principal/index.html';
        } else {
            attempts++;
            if (attempts >= 3) {
                errorMessage.textContent = 'Has alcanzado el número máximo de intentos. Inténtalo más tarde.';
                loginForm.querySelector('button').disabled = true;
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrectos. Intento ' + attempts + ' de 3.';
            }
        }
    });
});
