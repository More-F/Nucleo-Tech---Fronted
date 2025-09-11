window.addEventListener('DOMContentLoaded', function() {
    const user = getSessionUser();
    const nav = document.querySelector('.contenedor_nav') || document.body;
    if (user) {
        // Mostrar solo el primer saludo y el icono de cerrar sesión
        if (!document.getElementById('userGreeting')) {
            const userDiv = document.createElement('div');
            userDiv.id = 'userGreeting';
            userDiv.style.display = 'flex';
            userDiv.style.alignItems = 'center';
            const primerNombre = user.nombre.split(' ')[0];
            userDiv.innerHTML = `
                <span style="margin-right:8px;">Hola, ${primerNombre}</span>
                <button id="logoutBtn" style="background:none;border:none;cursor:pointer;">
                    <i class="bi bi-box-arrow-right" title="Cerrar sesión" style="font-size:1.5rem;color:#A5BF45;"></i>
                </button>
            `;
            nav.appendChild(userDiv);
            document.getElementById('logoutBtn').onclick = function() {
                logoutUser();
                window.location.href = 'Nucleo-Tech---Fronted/index.html';
            };
        }
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const user = getSessionUser();
     const loginIcon = document.querySelector('.bi-person-circle');
    const nav = document.querySelector('.contenedor_nav') || document.body;
    if (user) {
        // Oculta el ícono de login y el nombre de usuario
        if (loginIcon) loginIcon.style.display = 'none';
 
        // Mostrar saludo y botón de logout
        if (!document.getElementById('userGreeting')) {
            const userDiv = document.createElement('div');
            userDiv.id = 'userGreeting';
            userDiv.style.display = 'flex';
            userDiv.style.alignItems = 'center';
            const primerNombre = user.nombre.split(' ')[0];
            userDiv.innerHTML = `
                <span style="margin-right:8px;">Hola, ${primerNombre}</span>
                <button id="logoutBtn" style="background:none;border:none;cursor:pointer;">
                    <i class="bi bi-box-arrow-right" title="Cerrar sesión" style="font-size:1.5rem;color:#A5BF45;"></i>
                </button>
            `;
            nav.appendChild(userDiv);
            document.getElementById('logoutBtn').onclick = function() {
                logoutUser();
                window.location.href = '../index.html';
            };
        }
    }
});