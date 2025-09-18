
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
    fetch('http://localhost:8080/api/usuarios/autenticar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                email, password
            })
        })
        .then(async response => {
            if (response.status === 200) {
                const user = await response.json();
                    console.log('Respuesta del backend:', user);
                    // Guardar usuario en localStorage
                    localStorage.setItem('usuario', JSON.stringify(user));
                    // Redirigir si el usuario tiene email válido (asume rol customer por defecto)
                    if (user.email) {
                        window.location.href = '../index.html';
                    }
            } else {
                document.getElementById('loginError').textContent = 'Email o contraseña incorrecta.';
            }
        })
        .catch(error => {
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