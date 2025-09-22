
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this[0].value;
    const password = this[1].value;
        // Validar campos vacíos
        if (!email || !password) {
            document.getElementById('loginError').textContent = 'Por favor ingrese email y contraseña.';
            return;
        }
    // Conexión al backend usando fetch
   fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ correo: email, password })
})
.then(async response => {
    if (response.ok) {
        const data = await response.json();

        // Guardar token
        localStorage.setItem('token', data.token);

        // Guardar usuario
        localStorage.setItem('usuario', JSON.stringify({
            id: data.id,
            nombre: data.nombre,
            correo: data.correo,
            rol: data.rol
        }));

        // Redirigir según rol
    if (data.rol === 'admin') {
        window.location.href = '../HTML/admin.html';
    } else {
        window.location.href = '../index.html';
    }
    } else {
        document.getElementById('loginError').textContent = 'Email o contraseña incorrecta.';
    }
})
.catch(() => {
    document.getElementById('loginError').textContent = 'Error de conexión al servidor.';
});
});

 
// Mostrar/ocultar contraseña con ojito
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.classList.remove(isPassword ? 'fa-eye' : 'fa-eye-slash');
    this.classList.add(isPassword ? 'fa-eye-slash' : 'fa-eye');

});