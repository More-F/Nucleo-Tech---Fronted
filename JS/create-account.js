document.addEventListener('DOMContentLoaded', function () {
    // Toggle para contraseña principal
    const toggle = document.getElementById('toggleCreatePassword');
    const passwordInput = document.getElementById('createPassword');
    if (toggle && passwordInput) {
        toggle.addEventListener('click', function () {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            this.classList.remove(isPassword ? 'fa-eye' : 'fa-eye-slash');
            this.classList.add(isPassword ? 'fa-eye-slash' : 'fa-eye');
        });
    }
    // Toggle para confirmar contraseña
    const toggleConfirm = document.getElementById('toggleConfirmPassword');
    const confirmInput = document.getElementById('confirmPassword');
    if (toggleConfirm && confirmInput) {
        toggleConfirm.addEventListener('click', function () {
            const isPassword = confirmInput.type === 'password';
            confirmInput.type = isPassword ? 'text' : 'password';
            this.classList.remove(isPassword ? 'fa-eye' : 'fa-eye-slash');
            this.classList.add(isPassword ? 'fa-eye-slash' : 'fa-eye');
        });
    }
});
document.getElementById('formCustomer').addEventListener('submit', function (e) {
    e.preventDefault();
    // Limpiar mensaje previo
    let errorMsg = document.getElementById('error-msg-create-account');
    if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.id = 'error-msg-create-account';
        errorMsg.style.color = '#ff4444';
        errorMsg.style.marginBottom = '1rem';
        errorMsg.style.textAlign = 'left';
        errorMsg.style.maxWidth = '400px';
        errorMsg.style.margin = '0 auto 1rem auto';
        errorMsg.style.fontSize = '0.92rem';
        const btn = this.querySelector('button[type="submit"]');
        if (btn) {
            btn.parentNode.insertBefore(errorMsg, btn);
        } else {
            this.appendChild(errorMsg);
        }
    }
    errorMsg.innerHTML = '';

    const nombre = this[0].value;
    const email = this[1].value;
    const password = this[2].value;
    const confirmPassword = this[3].value;
    // Si tienes más campos como teléfono/dirección, ajusta los índices
    // Para compatibilidad, si no existen, se asigna vacío
    const telefono = '';
    const direccion = '';

    // Validaciones
    let errores = [];
    // Validación de campos vacíos
    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
        errorMsg.innerHTML = '<b>Por favor, aborde lo siguiente:</b><ul style="margin-top:0.5rem; margin-bottom:0.5rem;"><li>Todos los campos son obligatorios.</li></ul>';
        return;
    }
    if (password !== confirmPassword) {
        errorMsg.innerHTML = '<b>Por favor, aborde lo siguiente:</b><ul style="margin-top:0.5rem; margin-bottom:0.5rem;"><li>Las contraseñas no coinciden.</li></ul>';
        return;
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        errores.push('Correo electrónico no es válido.');
    }
    if (password.length < 5) {
        errores.push('Contraseña es demasiado corta (mínimo 5 caracteres).');
    }
    const mayusculaRegex = /[A-Z]/;
    if (!mayusculaRegex.test(password)) {
        errores.push('La contraseña debe contener al menos una letra mayúscula.');
    }
    const simboloRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!simboloRegex.test(password)) {
        errores.push('La contraseña debe contener al menos un símbolo especial.');
    }

    if (errores.length > 0) {
        errorMsg.innerHTML = '<b>Por favor, aborde lo siguiente:</b><ul style="margin-top:0.5rem; margin-bottom:0.5rem;">' + errores.map(e => `<li>${e}</li>`).join('') + '</ul>';
        return;
    }

    const user = {
        nombre,
        email,
        password,
        telefono,
        direccion,
        rol: 'customer'
    };
    const res = registerUser(user);
    if (res.success) {
        mostrarModalCreacionExitosa(user.nombre);
    } else {
        errorMsg.innerHTML = '<b>Por favor, aborde lo siguiente:</b><ul style="margin-top:0.5rem; margin-bottom:0.5rem;"><li>' + res.message + '</li></ul>';
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
        document.getElementById('cerrar-modal-creacion').onclick = function () {
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
        document.getElementById('cerrar-modal-error').onclick = function () {
            modal.style.display = 'none';
        };
    }
});


