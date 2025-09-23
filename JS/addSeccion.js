// 🔹 Compatibilidad: Si sessionManager no está cargado, usar la función local
window.addEventListener('DOMContentLoaded', function() {
    // Si sessionManager está disponible, usarlo y salir
    if (window.sessionManager) {
        return; // sessionManager se encarga de todo
    }
    
    // Fallback: usar la lógica original solo para localStorage
    const user = getSessionUser();
    const nav = document.querySelector('.contenedor_nav') || document.body;
    if (user) {
        // Ocultar el ícono de login
        const loginIcon = document.querySelector('.bi-person-circle');
        if (loginIcon) loginIcon.style.display = 'none';
        
        // Mostrar solo el primer saludo y el icono de cerrar sesión
        if (!document.getElementById('userGreeting')) {
            const userDiv = document.createElement('div');
            userDiv.id = 'userGreeting';
            userDiv.style.display = 'flex';
            userDiv.style.alignItems = 'center';
            const primerNombre = user.nombre.split(' ')[0];
            userDiv.innerHTML = `
                <span style="margin-right:8px; color:#fff;">Hola, ${primerNombre}</span>
                <button id="logoutBtn" style="background:none;border:none;cursor:pointer;">
                    <i class="bi bi-box-arrow-right" title="Cerrar sesión" style="font-size:1.5rem;color:#A5BF45;"></i>
                </button>
            `;
            nav.appendChild(userDiv);
            document.getElementById('logoutBtn').onclick = function() {
                // Si sessionManager está disponible, usar su modal
                if (window.sessionManager && window.sessionManager.mostrarModalCerrarSesion) {
                    window.sessionManager.mostrarModalCerrarSesion();
                } else {
                    // Fallback: usar confirm básico
                    if (confirm('¿Deseas cerrar sesión?')) {
                        logoutUser();
                        // Detectar si estamos en subcarpeta o página principal
                        if (window.location.pathname.includes('/HTML/')) {
                            window.location.href = '../index.html';
                        } else {
                            window.location.href = 'index.html';
                        }
                    }
                }
            };
        }
    }
});