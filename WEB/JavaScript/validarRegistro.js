function validarRegistro() {
    var email = document.getElementById('emailRegistro').value;
    var password = document.getElementById('passwordRegistro').value;
    var errorDiv = document.getElementById('error-registro');
    var mensajeError = '';

    // Validación del correo electrónico
    if (!email.match(/^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|live\.com|hotmail\.com)$/)) {
        mensajeError += 'El correo debe ser de dominio @gmail.com, @outlook.com , @hotmail.com o @live.com.<br>';
    }
    if (email.length < 8 || email.length > 30) {
        mensajeError += 'El correo debe tener entre 8 y 30 caracteres.<br>';
    }

    // Validación de la contraseña
    if (password.length < 8) {
        mensajeError += 'La contraseña debe tener un mínimo de 8 caracteres.<br>';
    }

    // Mensaje de error si existe
    if (mensajeError.length > 0) {
        errorDiv.innerHTML = mensajeError;
        errorDiv.style.display = 'block';
        return false;
    }

    errorDiv.style.display = 'none';
    return true;
}