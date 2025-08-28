window.addEventListener('DOMContentLoaded', function() {
    const user = getSessionUser();
    const nav = document.querySelector('.contenedor_nav') || document.body;
    if (user) {
        // Mostrar nombre y botón de cerrar sesión
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <span>Hola, ${user.nombre}</span>
            <button id="logoutBtn" ">Cerrar sesión</button>
        `;
        nav.appendChild(userDiv);
        document.getElementById('logoutBtn').onclick = function() {
            logoutUser();
            window.location.href = 'login.html';
        };
    }
});