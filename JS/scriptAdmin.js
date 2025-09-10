// ==========================================
// DATOS BASE Y CONFIGURACIÓN INICIAL
// ==========================================

// Productos base iniciales
const productosBase = [
  {
    id: 1,
    categoria: "procesadores",
    nombre: "Procesador Intel Core i7 12700K",
    marca: "Intel",
    precio: 1500000,
    stock: 12,
    descripcion: "12 núcleos, 20 hilos, frecuencia base 3.6GHz, ideal para gaming y multitarea.",
    imagen: "IMG/Procesador Intel Core i7 12700K.webp",
    especificaciones: {
      socket: "LGA1700",
      TDP: "125W",
      graficaIntegrada: "Intel UHD Graphics 770"
    }
  },
    {
        id: 2,
        categoria: "monitores",
        nombre: "Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS",
        marca: "MSI",
        precio: 4997000,
        stock: 8,
        descripcion: "Panel QD-OLED de 3.ª Generación: calidad de imagen impresionante y tiempo de respuesta ultra rápido.",
        imagen: "IMG/Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS.webp",
        especificaciones: {
          resolucion: "4K",
          tasaRefresco: "165Hz",
          tiempoRespuesta: "0.03ms"
        }
    },
    {
        id: 3,
        nombre: "Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB",
        categoria: "tarjetas-video",
        marca: "ASRock",
        precio: 3700000,
        stock: 5,
        imagen: "IMG/Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB.webp",
        descripcion: "La ASRock AMD Radeon RX 9070 XT Steel Legend Dark es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, diseñada para gamers y creadores de contenido.",
        especificaciones: {
          arquitectura: "RDNA 3",
          rayTracing: "Sí",
          memoria: "16GB GDDR6"
        }
    },
    {
        id: 4,
        nombre: "Chasis Aerocool Ore Saturn FRGB Vidrio Templado",
        categoria: "chasis",
        marca: "Aerocool",
        precio: 2007002,
        stock: 10,
        imagen: "IMG/Chasis Aerocool Ore Saturn FRGB Vidrio Templado.jpg",
        descripcion: "Chasis Aerocool Ore Saturn FRGB con vidrio templado y diseño elegante.",
        especificaciones: {
          tipo: "ATX",
          material: "Acero y vidrio templado",
          ventiladores: "3x ARGB incluidos"
        }
    },
    {
        id: 5,
        nombre: "Fuente de Poder 80 Plus Gold 750W Modular",
        categoria: "fuentes",
        marca: "Corsair",
        precio: 405600,
        stock: 15,
        imagen: "IMG/Fuente de Poder 80 Plus Gold 750W Modular.jpg",
        descripcion: "Fuente de Poder 80 Plus Gold 750W Modular, eficiente y silenciosa.",
        especificaciones: {
          potencia: "750W",
          certificacion: "80 Plus Gold",
          modular: "Sí"
        }
    },
    {
        id: 6,
        nombre: "Fuente de Alimentación 850W 80 Plus Bronze",
        categoria: "fuentes",
        marca: "Corsair",
        precio: 305000,
        stock: 10,
        imagen: "IMG/Fuente de Alimentación 850W 80 Plus Bronze.webp",
        descripcion: "Fuente de Alimentación 850W 80 Plus Bronze, eficiente y silenciosa.",
        especificaciones: {
          potencia: "850W",
          certificacion: "80 Plus Bronze",
          modular: "Sí"
        }
    },
    {
        id: 7,
        nombre: "Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6",
        categoria: "tarjetas-video",
        marca: "NVIDIA",
        precio: 2200000,
        stock: 3,
        imagen: "IMG/Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6.jpg",
        descripcion: "La NVIDIA RTX 4070 es una tarjeta gráfica de alto rendimiento con 12GB de memoria GDDR6, ideal para gaming y creación de contenido.",
        especificaciones: {
          arquitectura: "Ada Lovelace",
          rayTracing: "Sí",
          memoria: "12GB GDDR6"
        }
    },
    {
        id: 8,
        nombre: "Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB",
        categoria: "tarjetas-video",
        marca: "AMD",
        precio: 3100000,
        stock: 3,
        imagen: "IMG/Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB.jpg",
        descripcion: "La AMD Radeon RX 7800 XT es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, ideal para gaming y creación de contenido.",
        especificaciones: {
          arquitectura: "RDNA 3",
          rayTracing: "Sí",
          memoria: "16GB GDDR6"
        }
    },
    {
        id: 9,
        nombre: "Teclado Mecánico Gamer RGB Switch Blue",
        categoria: "teclados-mouse",
        marca: "Logitech",
        precio: 370000,
        stock: 20,
        imagen: "IMG/Teclado Mecánico Gamer RGB Switch Blue.jpg",
        descripcion: "Teclado Mecánico Gamer RGB Switch Blue, ideal para gamers.",
        especificaciones: {
          tipo: "Mecánico",
          retroiluminación: "RGB",
          switch: "Blue"
        }
    },
    {
        id: 10,
        nombre: "Mouse Inalámbrico Gamer 16000DPI RGB",
        categoria: "teclados-mouse",
        marca: "Logitech",
        precio: 245000,
        stock: 15,
        imagen: "IMG/Mouse Inalámbrico Gamer 16000DPI RGB.jpg",
        descripcion: "Mouse Inalámbrico Gamer 16000DPI RGB, preciso y ergonómico.",
        especificaciones: {
          dpi: "16000",
          retroiluminación: "RGB",
          tipo: "Inalámbrico"
        }
    },
    {
        id: 11,
        nombre: "Monitor Gaming 27\" 144Hz 1ms FreeSync",
        categoria: "monitores",
        marca: "Acer",
        precio: 1250000,
        stock: 5,
        imagen: "IMG/Monitor Gaming 27 144Hz 1ms FreeSync.jpg",
        descripcion: "Monitor Gaming 27\" 144Hz 1ms FreeSync, ideal para gamers.",
        especificaciones: {
          tamaño: "27\"",
          frecuencia: "144Hz",
          tiempoRespuesta: "1ms",
          tecnologia: "FreeSync"
        }
    },
    {
        id: 12,
        nombre: "Monitor Curvo 32\" 165Hz QHD",
        categoria: "monitores",
        marca: "Acer",
        precio: 1460000,
        stock: 3,
        imagen: "IMG/Monitor Curvo 32 165Hz QHD.jpg",
        descripcion: "Monitor Curvo 32\" 165Hz QHD, ideal para gamers.",
        especificaciones: {
          tamaño: "32\"",
          frecuencia: "165Hz",
          resolucion: "QHD",
          tecnologia: "Curvo"
        }
    },
    {
        id: 13,
        nombre: "Sistema de Refrigeración Líquida CPU 240mm RGB",
        categoria: "refrigeracion",
        marca: "Corsair",
        precio: 875000,
        stock: 10,
        imagen: "IMG/Sistema de Refrigeración Líquida CPU 240mm RGB.jpg",
        descripcion: "Sistema de Refrigeración Líquida CPU 240mm RGB, eficiente y silencioso.",
        especificaciones: {
          tipo: "Refrigeración Líquida",
          tamaño: "240mm",
          rgb: "Sí"
        }
    },
    {
        id: 14,
        nombre: "Ventiladores RGB 120mm Pack de 3",
        categoria: "refrigeracion",
        marca: "Corsair",
        precio: 135000,
        stock: 20,
        imagen: "IMG/PCCOOLER Ventilador de carcasa RGB de 4.724 in con rodamiento hidráulico, paquete de 3 unidades Magic Moon, PC-FX120.jpg",
        descripcion: "Ventiladores RGB 120mm Pack de 3, ideales para mejorar la refrigeración de tu PC.",
        especificaciones: {
          tipo: "Ventilador",
          tamaño: "120mm",
          rgb: "Sí"
        }
    }
];
 

// FUNCIONES DE MANEJO DE DATOS

// Inicializar localStorage con productos base
function inicializarProductos() {
  if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(productosBase));
  }
}
 
// Obtener productos desde localStorage
function obtenerProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}
 
// Guardar productos en localStorage
function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}
 
// Crear nuevo producto desde el formulario
function crearProductoDesdeFormulario(form, productos, imagenUrl) {
  return {
    id: productos.length + 1,
    categoria: document.getElementById("categoria").value,
    nombre: document.getElementById("nombre").value,
    marca: document.getElementById("marca").value,
    precio: parseFloat(document.getElementById("precio").value),
    stock: parseInt(document.getElementById("stock").value),
    descripcion: document.getElementById("descripcion").value,
    imagen: imagenUrl,
    especificaciones: {
      especificacion1: document.getElementById("especificacion1").value,
      especificacion2: document.getElementById("especificacion2").value,
      especificacion3: document.getElementById("especificacion3").value
    }
  };
}
 
// FUNCIONES DE GESTIÓN DE PRODUCTOS


// Agregar nuevo producto
function agregarProducto(producto,productos) {
  productos.push(producto);
  guardarProductos(productos);
  console.log("Catálogo actualizado:", productos);
  mostrarModal('exito', `El producto "${producto.nombre}" ha sido agregado correctamente`, () => {
    actualizarInterfaz();
  });
}
 
// Abrir modal para crear producto
function abrirModalCrear() {
  document.getElementById("modalCrear").style.display = "block";
}
 
// Inicialización de productos
inicializarProductos();
let productos = obtenerProductos();
console.log("Productos almacenados en localStorage:", productos);

// FUNCIONES DE VISUALIZACIÓN

// Mostrar productos en la tabla
function mostrarProductos() {
  const tbody = document.getElementById("tabla-productos");
  tbody.innerHTML = "";
 
  productos.forEach(prod => {
    const fila = `
      <tr>
        <td>${prod.id}</td>
        <td>${prod.categoria}</td>
        <td>${prod.nombre}</td>
        <td>${prod.marca || "-"}</td>
        <td>$${prod.precio.toLocaleString('es-CO')}</td>
        <td>${prod.stock}</td>
        <td>
          <button class="btn-accion editar"
            onclick="abrirModalEditar(${prod.id})">Editar</button>
          <button class="btn-accion eliminar"
            onclick="eliminarProducto(${prod.id})">Eliminar</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });
}
 
// MANEJO DE EVENTOS DEL FORMULARIO

// Capturar el formulario y manejar el envío
const form = document.getElementById("formProducto");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validar campos requeridos
  const camposRequeridos = ["categoria", "nombre", "marca", "precio", "stock", "descripcion"];
  let faltanCampos = false;
  
  camposRequeridos.forEach(campo => {
    const valor = document.getElementById(campo).value.trim();
    if (!valor) {
      faltanCampos = true;
      document.getElementById(campo).classList.add('campo-invalido');
    } else {
      document.getElementById(campo).classList.remove('campo-invalido');
    }
  });

  if (faltanCampos) {
    alert("Por favor complete todos los campos requeridos");
    return;
  }

  // Validar que el nombre no se repita
  const nombreProducto = document.getElementById("nombre").value.trim();
  const productos = obtenerProductos();
  const nombreExiste = productos.some(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());

  if (nombreExiste) {
    mostrarModal('error', 'Ya existe un producto con ese nombre');
    document.getElementById("nombre").classList.add('campo-invalido');
    return;
  }

  // Validar que precio y stock sean números válidos
  const precio = parseFloat(document.getElementById("precio").value);
  const stock = parseInt(document.getElementById("stock").value);

  if (isNaN(precio) || precio <= 0) {
    alert("El precio debe ser un número mayor que 0");
    document.getElementById("precio").classList.add('campo-invalido');
    return;
  }

  if (isNaN(stock) || stock < 0) {
    alert("El stock debe ser un número mayor o igual a 0");
    document.getElementById("stock").classList.add('campo-invalido');
    return;
  }

  const archivoImagen = document.getElementById("imagen").files[0];
 
  if (archivoImagen) {
    const reader = new FileReader(); // Api
    reader.onload = function(event) {
      const imagenBase64 = event.target.result;
      const producto = crearProductoDesdeFormulario(form, productos, imagenBase64);
      agregarProducto(producto, productos);
      limpiarFormularioYCerrarModal(form, camposRequeridos);
    };
    reader.readAsDataURL(archivoImagen);
  } else {
    const producto = crearProductoDesdeFormulario(form, productos, "tarjeta.jpg");
    agregarProducto(producto, productos);
    limpiarFormularioYCerrarModal(form, camposRequeridos);
  }
});

// Función auxiliar para limpiar el formulario y cerrar el modal
function limpiarFormularioYCerrarModal(form, camposRequeridos) {
  form.reset();
  document.getElementById("modalCrear").style.display = "none";
  camposRequeridos.forEach(campo => {
    document.getElementById(campo).classList.remove('campo-invalido');
  });
  actualizarInterfaz();
}


mostrarProductos();
// FUNCIONES DE EDICIÓN DE PRODUCTOS
// Mostrar vista previa de imagen al seleccionar nueva en edición
document.getElementById('imagenEditar').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('previewImagenEditar').src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Abrir modal de edición y cargar datos del producto
function abrirModalEditar(id) {
  const producto = productos.find(p => p.id === id);
 
  if (producto) {
    document.getElementById('nombreEditar').value = producto.nombre;
    document.getElementById('nombreEditar').placeholder = producto.nombre;
    document.getElementById('categoriaEditar').value = producto.categoria;
    document.getElementById('categoriaEditar').placeholder = producto.categoria;
    document.getElementById('marcaEditar').value = producto.marca;
    document.getElementById('marcaEditar').placeholder = producto.marca;
    document.getElementById('precioEditar').value = producto.precio;
    document.getElementById('precioEditar').placeholder = producto.precio;
    document.getElementById('stockEditar').value = producto.stock;
    document.getElementById('stockEditar').placeholder = producto.stock;
  document.getElementById('descripcionEditar').value = producto.descripcion || '';
  document.getElementById('descripcionEditar').placeholder = producto.descripcion || '';
  document.getElementById('previewImagenEditar').src = producto.imagen || '';
  document.getElementById('imagenEditar').value = '';
    document.querySelector('.form-editar').setAttribute('data-id', id);
    document.getElementById('modalEditar').style.display = 'block';
  }
}
 
// Manejar el submit del formulario
document.querySelector('.form-editar').addEventListener('submit', function(e) {
  e.preventDefault();

  const id = parseInt(this.getAttribute('data-id'));

  const producto = productos.find(p => p.id === id);

  if (producto) {
    producto.nombre = document.getElementById('nombreEditar').value;
    producto.categoria = document.getElementById('categoriaEditar').value;
    producto.marca = document.getElementById('marcaEditar').value;
    producto.precio = parseFloat(document.getElementById('precioEditar').value);
    producto.stock = parseInt(document.getElementById('stockEditar').value);
    producto.descripcion = document.getElementById('descripcionEditar').value;
    const archivoImagen = document.getElementById('imagenEditar').files[0];
    if (archivoImagen) {
      const reader = new FileReader();
      reader.onload = function(event) {
        producto.imagen = event.target.result;
        guardarProductos(productos);
  document.getElementById('modalEditar').style.display = 'none';
  actualizarInterfaz();
  document.getElementById('modalEdicionExitosa').style.display = 'flex';
      };
  reader.readAsDataURL(archivoImagen);
    } else {
  guardarProductos(productos);
  document.getElementById('modalEditar').style.display = 'none';
  actualizarInterfaz();
  document.getElementById('modalEdicionExitosa').style.display = 'flex';
    }
  }
});
// FUNCIONES DE INTERFAZ DE USUARIO

// Función genérica para crear y mostrar modales
function mostrarModal(tipo, mensaje, callback = null) {
    let modal = document.getElementById(`modal-${tipo}`);
    let icono, titulo, colorBoton;

    switch(tipo) {
        case 'exito':
            icono = 'fa-circle-check';
            titulo = '¡Éxito!';
            colorBoton = '#235884';
            break;
        case 'confirmar':
            icono = 'fa-triangle-exclamation';
            titulo = 'Confirmar acción';
            colorBoton = '#A5BF45';
            break;
        case 'error':
            icono = 'fa-circle-xmark';
            titulo = 'Error';
            colorBoton = '#ff4444';
            break;
    }

    if (!modal) {
        modal = document.createElement('div');
        modal.id = `modal-${tipo}`;
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

        let botones = '';
        if (tipo === 'confirmar') {
            botones = `
                <button id='confirmar-accion' style='margin-top:1.5rem; background:${colorBoton}; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer; margin-right:1rem;'>Confirmar</button>
                <button id='cancelar-accion' style='margin-top:1.5rem; background:#6c757d; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cancelar</button>
            `;
        } else {
            botones = `<button id='cerrar-modal-${tipo}' style='margin-top:1.5rem; background:${colorBoton}; color:#fff; border:none; border-radius:2rem; padding:0.6rem 2.2rem; font-size:1rem; font-weight:600; cursor:pointer;'>Cerrar</button>`;
        }

        modal.innerHTML = `
            <div style="background: #fff; color: #235884; border-radius: 1.2rem; padding: 2.2rem 2.5rem; box-shadow: 0 8px 32px 0 rgba(34, 40, 49, 0.18); text-align: center; max-width: 90vw;">
                <i class='fa-solid ${icono}' style='font-size:2.5rem; color:${colorBoton}; margin-bottom:1rem;'></i>
                <h2 style='margin-bottom:0.7rem;'>${titulo}</h2>
                <p style='font-size:1.1rem;'>${mensaje}</p>
                ${botones}
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        modal.style.display = 'flex';
        modal.querySelector('p').textContent = mensaje;
    }

    if (tipo === 'confirmar') {
        return new Promise((resolve) => {
            document.getElementById('confirmar-accion').onclick = function() {
                modal.style.display = 'none';
                resolve(true);
            };
            document.getElementById('cancelar-accion').onclick = function() {
                modal.style.display = 'none';
                resolve(false);
            };
        });
    } else {
        document.getElementById(`cerrar-modal-${tipo}`).onclick = function() {
            modal.style.display = 'none';
            if (callback) callback();
        };
    }
}

function agregarProducto(producto, productos) {
    productos.push(producto);
    guardarProductos(productos);
    console.log("Catálogo actualizado:", productos);
    
    mostrarModal('exito', `El producto "${producto.nombre}" ha sido agregado correctamente`, () => {
        actualizarInterfaz();
    });
}

// Función para eliminar producto
async function eliminarProducto(id) {
    let productos = obtenerProductos();
    const producto = productos.find(p => p.id === id);
    const confirmar = await mostrarModal('confirmar', `¿Estás seguro que deseas eliminar el producto "${producto.nombre}"?`);
    if (confirmar) {
        productos = productos.filter(p => p.id !== id);
        guardarProductos(productos);
        mostrarModal('exito', `El producto "${producto.nombre}" ha sido eliminado correctamente`, () => {
            actualizarInterfaz();
        });
    }
}


// FUNCIONES DE ACTUALIZACIÓN AUTOMÁTICA

// Función para actualizar la interfaz completa
function actualizarInterfaz() {
    // Obtener productos actualizados
    productos = obtenerProductos();
    console.log('Actualizando interfaz con productos:', productos);
    mostrarProductos();
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        const categoriaActual = document.querySelector('.category-btn.active')?.dataset.category || 'all';
        if (typeof renderProductos === 'function') {
            console.log('Actualizando catálogo con categoría:', categoriaActual);
            renderProductos(categoriaActual);
        }
    }

    // Disparar evento custom para notificar cambios
    window.dispatchEvent(new CustomEvent('productosActualizados', {
        detail: { productos: productos }
    }));
}

// Observador de cambios en localStorage
window.addEventListener('storage', (e) => {
    if (e.key === 'productos') {
        console.log('Cambios detectados en localStorage');
        actualizarInterfaz();
    }
});

// Actualizar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada, actualizando interfaz');
    actualizarInterfaz();
});