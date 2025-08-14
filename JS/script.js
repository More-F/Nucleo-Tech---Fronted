document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');
    const inputNombre = document.querySelector('#nombre');
    const inputCelular = document.querySelector('#celular');
    const inputEmail = document.querySelector('#correo');
    const inputMensaje = document.querySelector('#mensaje');
 
    //validación en blur
    [inputNombre, inputCelular, inputEmail, inputMensaje].forEach(input => {
        input.addEventListener('blur', validar);
    });
 
    //validar campos
    function validar(e) {
        const campo = e.target;
        const valor = campo.value.trim();
        let mensajeError = '';
 
        if (campo.id === 'nombre') {
            if (valor.length < 2) {
                mensajeError = 'El nombre debe tener al menos 2 caracteres.';
            } else if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(valor)) {
                mensajeError = 'El nombre solo debe contener letras y espacios.';
            }
        }
 
        if (campo.id === 'celular') {
            if (!/^[0-9]{10,15}$/.test(valor)) {
                mensajeError = 'El celular debe contener solo números y tener entre 10 y 15 dígitos.';
            }
        }
 
        if (campo.id === 'correo') {
            const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/i;
            if (!regexEmail.test(valor.toLowerCase())) {
                mensajeError = 'Por favor, ingresa un correo electrónico válido.';
            }
        }
 
        if (campo.id === 'mensaje') {
            if (valor.length < 10) {
                mensajeError = 'El mensaje debe tener al menos 10 caracteres.';
            }
        }
 
        mostrarError(campo, mensajeError);
    }
 
    //mostrar errores
    
    function mostrarError(input, mensaje) {
        const grupo = input.closest('.form-group');
        const errorPrevio = grupo.querySelector('.mensaje-error');
        if (errorPrevio) errorPrevio.remove();
 
        if (mensaje !== '') {
            const error = document.createElement('div');
            error.classList.add('mensaje-error');
            error.style.color = 'red';
            error.style.fontSize = '0.9em';
            error.textContent = mensaje;
            grupo.appendChild(error);
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    }

    //enviar con Formspree
    form.addEventListener('submit', function (e) {
        e.preventDefault();
 
        //revisar todos los campos antes de enviar
        [inputNombre, inputCelular, inputEmail, inputMensaje].forEach(input => validar({ target: input }));
 
        const errores = document.querySelectorAll('.is-invalid');
        if (errores.length > 0) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }
 
        //No errores, enviamos con fetch
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                mostrarModalExito(inputNombre.value.trim());
                form.reset();
                // Quitar estilos de validación
                [inputNombre, inputCelular, inputEmail, inputMensaje].forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
            } else {
                alert("⚠️ Hubo un problema al enviar el mensaje. Intenta nuevamente.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("❌ Error al enviar el formulario. Intenta de nuevo más tarde.");
        });

    // Modal de éxito
    function mostrarModalExito(nombre) {
        let modal = document.getElementById('modal-exito-contacto');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-exito-contacto';
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
                    <h2 style='margin-bottom:0.7rem;'>¡Información enviada!</h2>
                    <p style='font-size:1.1rem;'>Gracias <b>${nombre}</b>, hemos recibido tu mensaje.<br>Nos pondremos en contacto pronto.</p>
                    <button id='cerrar-modal-exito' style='margin-top:1.5rem; background:#235884; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cerrar</button>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            modal.style.display = 'flex';
            modal.querySelector('b').textContent = nombre;
        }
        document.getElementById('cerrar-modal-exito').onclick = function() {
            modal.style.display = 'none';
        };
    }
    });
});
 
//Animacion


