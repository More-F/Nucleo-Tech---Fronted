document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const inputNombre = document.querySelector('#nombre');
    const inputCelular = document.querySelector('#celular');
    const inputEmail = document.querySelector('#correo');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos de validación en blur
    [inputNombre, inputCelular, inputEmail, inputMensaje].forEach(input => {
        input.addEventListener('blur', validar);
    });

    // Funcion para validar

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
            if (valor.trim().length < 10) {
                mensajeError = 'El mensaje debe tener al menos 10 caracteres.';
            }
        }

        mostrarError(campo, mensajeError);
    }
     
    //Funcion que muestra el error 
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

    // Validar al enviar
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita envío inmediato

        // Forzar validación de todos los campos
        [inputNombre, inputCelular, inputEmail, inputMensaje].forEach(input => validar({ target: input }));

        // Revisar si hay errores o campos vacíos
        const errores = document.querySelectorAll('.is-invalid');
        if (errores.length > 0) {
            alert('Por favor, completa todos los campos correctamente.');
        } else {
            alert('Formulario completo');
            location.reload(); // Recargar página
        }
    });
});