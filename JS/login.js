
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this[0].value;
    const password = this[1].value;
    const res = loginUser(email, password);
    if (res.success) {
        if (res.user.rol === 'customer') {
            window.location.href = 'index.html';
        } else if (res.user.rol === 'admin') {
            window.location.href = 'admin.html';
        }
    } else {
        document.getElementById('loginError').textContent = res.message;
    }
});