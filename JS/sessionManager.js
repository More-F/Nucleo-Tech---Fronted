// 🔹 Gestor de sesión unificado para localStorage y backend
document.addEventListener("DOMContentLoaded", function() {
    actualizarNavbarUsuario();
    actualizarContadorCarrito();
});

// 🔹 Función para obtener el usuario actual (localStorage o backend)
function obtenerUsuarioActual() {
    // Primero verificar si hay una sesión del backend (login.js)
    const usuarioBackend = localStorage.getItem('usuario');
    if (usuarioBackend) {
        try {
            return JSON.parse(usuarioBackend);
        } catch (e) {
            console.error('Error al parsear usuario del backend:', e);
        }
    }
    
    // Después verificar si hay una sesión local (Users.js)
    const sesionLocal = localStorage.getItem('sesion');
    if (sesionLocal) {
        try {
            return JSON.parse(sesionLocal);
        } catch (e) {
            console.error('Error al parsear sesión local:', e);
        }
    }
    
    return null;
}

// 🔹 Actualizar el navbar con la información del usuario
function actualizarNavbarUsuario() {
    const usuario = obtenerUsuarioActual();
    const nameUserElement = document.getElementById('nameUser');
    const personIconLink = document.querySelector('a[href="HTML/login.html"]') || document.querySelector('a[href="login.html"]');
    const nav = document.querySelector('.contenedor_nav') || document.body;
    
    if (usuario) {
        // Ocultar el elemento nameUser original si existe
        if (nameUserElement) {
            nameUserElement.style.display = 'none';
        }
        
        // Ocultar el ícono de login si existe
        const loginIcon = document.querySelector('.bi-person-circle');
        if (loginIcon) {
            loginIcon.style.display = 'none';
        }
        
        // Crear o actualizar el saludo del usuario (mismo estilo que addSeccion.js)
        let userGreeting = document.getElementById('userGreeting');
        if (!userGreeting) {
            userGreeting = document.createElement('div');
            userGreeting.id = 'userGreeting';
            userGreeting.style.display = 'flex';
            userGreeting.style.alignItems = 'center';
            
            // Agregar al final del nav
            nav.appendChild(userGreeting);
        }
        
        const primerNombre = usuario.nombre ? usuario.nombre.split(' ')[0] : 'Usuario';
        userGreeting.innerHTML = `
            <span style="margin-right:8px; color:#fff;">Hola, ${primerNombre}</span>
            <button id="logoutBtn" style="background:none;border:none;cursor:pointer;">
                <i class="bi bi-box-arrow-right" title="Cerrar sesión" style="font-size:1.5rem;color:#A5BF45;"></i>
            </button>
        `;
        
        // Event listener para logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = function() {
                mostrarModalCerrarSesion();
            };
        }
        
    } else {
        // No hay usuario logueado - restaurar estado original
        if (nameUserElement) {
            nameUserElement.style.display = 'none';
        }
        
        // Mostrar el ícono de login
        const loginIcon = document.querySelector('.bi-person-circle');
        if (loginIcon) {
            loginIcon.style.display = 'inline';
        }
        
        // Remover el saludo si existe
        const userGreeting = document.getElementById('userGreeting');
        if (userGreeting) {
            userGreeting.remove();
        }
        
        // Restaurar enlace original
        if (personIconLink) {
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                personIconLink.href = 'HTML/login.html';
            } else {
                personIconLink.href = 'login.html';
            }
        }
    }
}

// 🔹 Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuario'); // Backend
    localStorage.removeItem('sesion');  // Local
    localStorage.removeItem('carrito'); // Limpiar carrito
    
    // Redirigir a login detectando la ubicación actual
    if (window.location.pathname.includes('/HTML/')) {
        // Estamos en una subcarpeta, ir hacia atrás
        window.location.href = '../index.html';
    } else {
        // Estamos en la página principal
        window.location.href = 'HTML/login.html';
    }
}

// 🔹 Verificar si el usuario puede agregar al carrito
function puedeAgregarAlCarrito() {
    const usuario = obtenerUsuarioActual();
    return usuario !== null;
}

// 🔹 Mostrar mensaje de login requerido
function mostrarMensajeLoginRequerido() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(34,40,49,0.65);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    
    modal.innerHTML = `
        <div style="background: #fff; color: #235884; border-radius: 1.2rem; padding: 2.2rem 2.5rem; box-shadow: 0 8px 32px 0 rgba(34, 40, 49, 0.18); text-align: center; max-width: 90vw;">
            <i class='fa-solid fa-user-slash' style='font-size:2.5rem; color:#ff4444; margin-bottom:1rem;'></i>
            <h2 style='margin-bottom:0.7rem;'>Inicia sesión requerida</h2>
            <p style='font-size:1.1rem;'>Debes iniciar sesión para agregar productos al carrito.</p>
            <div style="margin-top:1.5rem;">
                <button id='ir-login' style='background:#235884; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer; margin-right:1rem;'>Iniciar sesión</button>
                <button id='cerrar-modal' style='background:#ccc; color:#333; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cancelar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners
    document.getElementById('ir-login').onclick = function() {
        modal.remove();
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            window.location.href = 'HTML/login.html';
        } else {
            window.location.href = 'login.html';
        }
    };
    
    document.getElementById('cerrar-modal').onclick = function() {
        modal.remove();
    };
    
    // Cerrar con click en overlay
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// 🔹 Actualizar contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartCount = document.getElementById("cart-count");
    
    if (cartCount) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.style.display = "inline";
        } else {
            cartCount.style.display = "none";
        }
    }
}

// 🔹 Modal para confirmar cerrar sesión
function mostrarModalCerrarSesion() {
    const usuarioActual = obtenerUsuarioActual();
    const nombreUsuario = usuarioActual ? usuarioActual.nombre.split(' ')[0] : 'Usuario';
    
    let modal = document.getElementById('modal-cerrar-sesion');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-cerrar-sesion';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(34,40,49,0.65);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        modal.innerHTML = `
            <div style="background: #fff; color: #235884; border-radius: 1.2rem; padding: 2.2rem 2.5rem; box-shadow: 0 8px 32px 0 rgba(34, 40, 49, 0.18); text-align: center; max-width: 90vw;">
                <i class='fa-solid fa-sign-out-alt' style='font-size:2.5rem; color:#ff6b35; margin-bottom:1rem;'></i>
                <h2 style='margin-bottom:0.7rem; color:#235884;'>Cerrar sesión</h2>
                <p style='font-size:1.1rem; color:#666; margin-bottom:1.5rem;'>¿Estás seguro que deseas cerrar sesión, <b>${nombreUsuario}</b>?</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button id='confirmar-logout' style='background:#ff6b35; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Sí, cerrar sesión</button>
                    <button id='cancelar-logout' style='background:#ccc; color:#333; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cancelar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    } else {
        // Actualizar el nombre en el modal si ya existe
        const nombreSpan = modal.querySelector('b');
        if (nombreSpan) {
            nombreSpan.textContent = nombreUsuario;
        }
        modal.style.display = 'flex';
    }
    
    // Event listeners
    document.getElementById('confirmar-logout').onclick = function() {
        modal.style.display = 'none';
        cerrarSesion();
    };
    
    document.getElementById('cancelar-logout').onclick = function() {
        modal.style.display = 'none';
    };
    
    // Cerrar con click en overlay
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Cerrar con tecla Escape
    const escapeHandler = function(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// 🔹 Función global para actualizar contador (para uso en otros scripts)
function updateCartCount() {
    actualizarContadorCarrito();
}

// 🔹 Exportar funciones para uso global
window.sessionManager = {
    obtenerUsuarioActual,
    actualizarNavbarUsuario,
    cerrarSesion,
    puedeAgregarAlCarrito,
    mostrarMensajeLoginRequerido,
    mostrarModalCerrarSesion,
    actualizarContadorCarrito,
    updateCartCount
};