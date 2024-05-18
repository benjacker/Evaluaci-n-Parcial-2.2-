
document.getElementById('loginForm').addEventListener('submit', function (event) {
    var usernameInput = document.getElementById('usernameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    var errorMessage = document.getElementById('error-message');

    // Validación del correo electrónico
    var emailRegex = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|live)\.(com|es)$/;

    if (!emailRegex.test(usernameInput)) {
        errorMessage.innerText = 'El usuario debe ser un correo válido: @gmail - @hotmail - @outlook - @live.';
        errorMessage.style.display = 'block';
        event.preventDefault();
        return;
    }

    // Validación del username (correo)
    if (usernameInput.length < 8 || usernameInput.length > 30) {
        errorMessage.innerText = 'El usuario debe tener entre 8 y 30 caracteres.';
        errorMessage.style.display = 'block';
        event.preventDefault();
        return;
    }

    // Validación de la contraseña
    if (passwordInput.length < 8) {
        errorMessage.innerText = 'La contraseña debe tener al menos 8 caracteres.';
        errorMessage.style.display = 'block';
        event.preventDefault();
        return;
    }

    // Si no hay errores, se envía el formulario
});

// Función para limpiar los campos de usuario y contraseña
function limpiarCampos() {
    var usernameInput = document.getElementById('usernameInput');
    var passwordInput = document.getElementById('passwordInput');
    var errorMessage = document.getElementById('error-message');

    // Limpiar los campos
    usernameInput.value = '';
    passwordInput.value = '';

    // Ocultar el mensaje de error
    errorMessage.style.display = 'none';
}
