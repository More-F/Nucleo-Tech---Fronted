document.getElementById('formCustomer').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = {
        nombre: this[0].value,
        email: this[1].value,
        password: this[2].value,
        telefono: this[3].value,
        direccion: this[4].value,
        rol: 'customer'
    };
    const res = registerUser(user);
    if (res.success) {
        alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    } else {
        alert(res.message);
    }
});


