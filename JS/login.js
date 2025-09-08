
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this[0].value;
    const password = this[1].value;
        // Validar campos vacíos
        if (!email || !password) {
            document.getElementById('loginError').textContent = 'Por favor ingrese email y contraseña.';
            return;
        }
    const res = loginUser(email, password);
    if (res.success) {
        if (res.user.rol === 'customer') {
            window.location.href = '../index.html';
        } else if (res.user.rol === 'admin') {
            window.location.href = 'admin.html';
        }
    } else {
            document.getElementById('loginError').textContent = 'Email o contraseña incorrecta.';
    }
});

 
// Mostrar/ocultar contraseña con ojito
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.classList.remove(isPassword ? 'fa-eye' : 'fa-eye-slash');
    this.classList.add(isPassword ? 'fa-eye-slash' : 'fa-eye');

});