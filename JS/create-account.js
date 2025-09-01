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
        mostrarModalCreacionExitosa(user.nombre);
    } else {
        mostrarModalError(res.message);
    }

    // Modal de creacion de cuenta exitosa
    function mostrarModalCreacionExitosa(nombre) {
        let modal = document.getElementById('modal-exito-creacion');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-exito-creacion';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(34,40,49,0.65)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '9999';
            modal.innerHTML = `
                <div style="background: #fff; color: #235884; border-radius: 1.2rem; padding: 2.2rem 2.5rem; box-shadow: 0 8px 32px 0 rgba(34, 40, 49, 0.18); text-align: center; max-width: 90vw;">
                    <i class='fa-solid fa-circle-check' style='font-size:2.5rem; color:#A5BF45; margin-bottom:1rem;'></i>
                    <h2 style='margin-bottom:0.7rem;'>¡Creación de cuenta exitosa!</h2>
                    <p style='font-size:1.1rem;'>Bienvenido <b>${nombre.split(' ')[0]}</b>, tu cuenta ha sido creada correctamente.<br>Puedes iniciar sesión ahora.</p>
                    <button id='cerrar-modal-creacion' style='margin-top:1.5rem; background:#235884; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Iniciar sesión</button>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            modal.style.display = 'flex';
            modal.querySelector('b').textContent = nombre.split(' ')[0];
        }
        document.getElementById('cerrar-modal-creacion').onclick = function() {
            modal.style.display = 'none';
            window.location.href = 'login.html';
        };
    }

    // Modal de error
    function mostrarModalError(mensaje) {
        let modal = document.getElementById('modal-error-creacion');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-error-creacion';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(34,40,49,0.65)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '9999';
            modal.innerHTML = `
                <div style="background: #fff; color: #ff4444; border-radius: 1.2rem; padding: 2.2rem 2.5rem; box-shadow: 0 8px 32px 0 rgba(34, 40, 49, 0.18); text-align: center; max-width: 90vw;">
                    <i class='fa-solid fa-circle-xmark' style='font-size:2.5rem; color:#ff4444; margin-bottom:1rem;'></i>
                    <h2 style='margin-bottom:0.7rem;'>Error</h2>
                    <p style='font-size:1.1rem;'>${mensaje}</p>
                    <button id='cerrar-modal-error' style='margin-top:1.5rem; background:#ff4444; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cerrar</button>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            modal.style.display = 'flex';
            modal.querySelector('p').textContent = mensaje;
        }
        document.getElementById('cerrar-modal-error').onclick = function() {
            modal.style.display = 'none';
        };
    }
});


