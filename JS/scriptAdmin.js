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
    },
    {
            id: 15,
            nombre: "Procesador AMD Ryzen 9 7900X",
            categoria: "procesadores",
            marca: "AMD",
            precio: 2300000,
            stock: 7,
            imagen: "IMG/Procesador AMD Ryzen 9 7900X.jpg",
            descripcion: "12 núcleos, 24 hilos, frecuencia base 4.7GHz, excelente para gaming y productividad.",
            especificaciones: {
                socket: "AM5",
                TDP: "170W",
                graficaIntegrada: "Radeon Graphics"
            }
        },
        {
            id: 16,
            nombre: "Procesador Intel Core i5 13600KF",
            categoria: "procesadores",
            marca: "Intel",
            precio: 1250000,
            stock: 9,
            imagen: "IMG/Procesador Intel Core i5 13600KF.jpg",
            descripcion: "14 núcleos, 20 hilos, gran relación precio-rendimiento.",
            especificaciones: {
                socket: "LGA1700",
                TDP: "125W",
                graficaIntegrada: "No"
            }
        },
        {
            id: 17,
            nombre: "Tarjeta de Video ASUS GeForce RTX 4080 16GB",
            categoria: "tarjetas-video",
            marca: "ASUS",
            precio: 5200000,
            stock: 4,
            imagen: "IMG/Tarjeta de Video ASUS GeForce RTX 4080 16GB.jpg",
            descripcion: "GPU de última generación con soporte para Ray Tracing y DLSS 3.",
            especificaciones: {
                arquitectura: "Ada Lovelace",
                rayTracing: "Sí",
                memoria: "16GB GDDR6X"
            }
        },
        {
            id: 18,
            nombre: "Tarjeta de Video Gigabyte GeForce RTX 4060 Ti 8GB",
            categoria: "tarjetas-video",
            marca: "Gigabyte",
            precio: 1750000,
            stock: 6,
            imagen: "IMG/Tarjeta de Video Gigabyte GeForce RTX 4060 Ti 8GB.jpg",
            descripcion: "Excelente para 1080p y 1440p gaming con 8GB GDDR6.",
            especificaciones: {
                arquitectura: "Ada Lovelace",
                rayTracing: "Sí",
                memoria: "8GB GDDR6"
            }
        },
        {
            id: 19,
            nombre: "Chasis NZXT H510 Blanco Vidrio Templado",
            categoria: "chasis",
            marca: "NZXT",
            precio: 520000,
            stock: 12,
            imagen: "IMG/Chasis NZXT H510 Blanco Vidrio Templado.jpg",
            descripcion: "Diseño minimalista con excelente gestión de cables.",
            especificaciones: {
                tipo: "ATX Mid Tower",
                material: "Acero y vidrio templado",
                ventiladores: "2 incluidos"
            }
        },
        {
            id: 20,
            nombre: "Chasis Cooler Master MasterBox TD500 Mesh",
            categoria: "chasis",
            marca: "Cooler Master",
            precio: 680000,
            stock: 8,
            imagen: "IMG/Chasis Cooler Master MasterBox TD500 Mes.jpg",
            descripcion: "Flujo de aire optimizado y diseño futurista.",
            especificaciones: {
                tipo: "ATX",
                material: "Acero y vidrio templado",
                ventiladores: "3 ARGB incluidos"
            }
        },
        {
            id: 21,
            nombre: "Fuente EVGA 1000W 80 Plus Platinum",
            categoria: "fuentes",
            marca: "EVGA",
            precio: 780000,
            stock: 5,
            imagen: "IMG/Fuente EVGA 1000W 80 Plus Platinum.jpg",
            descripcion: "Fuente modular de 1000W con certificación Platinum.",
            especificaciones: {
                potencia: "1000W",
                certificacion: "80 Plus Platinum",
                modular: "Sí"
            }
        },
        {
            id: 22,
            nombre: "Fuente Thermaltake Toughpower GF1 850W Gold",
            categoria: "fuentes",
            marca: "Thermaltake",
            precio: 560000,
            stock: 6,
            imagen: "IMG/Fuente Thermaltake Toughpower GF1 850W Gold.jpg",
            descripcion: "Fuente modular de 850W con certificación Gold.",
            especificaciones: {
                potencia: "850W",
                certificacion: "80 Plus Gold",
                modular: "Sí"
            }
        },
        {
            id: 23,
            nombre: "Teclado Mecánico Razer BlackWidow V3 RGB",
            categoria: "teclados-mouse",
            marca: "Razer",
            precio: 480000,
            stock: 10,
            imagen: "IMG/Teclado Mecánico Razer BlackWidow V3 RGB.jpg",
            descripcion: "Teclado mecánico con switches verdes y RGB.",
            especificaciones: {
                tipo: "Mecánico",
                retroiluminación: "RGB",
                switch: "Razer Green"
            }
        },
        {
            id: 24,
            nombre: "Mouse Razer DeathAdder V2 Pro Wireless",
            categoria: "teclados-mouse",
            marca: "Razer",
            precio: 420000,
            stock: 8,
            imagen: "IMG/Mouse Razer DeathAdder V2 Pro Wireless.jpg",
            descripcion: "Mouse inalámbrico con sensor de alta precisión.",
            especificaciones: {
                dpi: "20000",
                retroiluminación: "RGB",
                tipo: "Inalámbrico"
            }
        },
        {
            id: 25,
            nombre: "Monitor Samsung Odyssey G7 27\" QHD 240Hz",
            categoria: "monitores",
            marca: "Samsung",
            precio: 2200000,
            stock: 5,
            imagen: "IMG/Monitor Samsung Odyssey G7 27 QHD 240Hz.jpg",
            descripcion: "Monitor curvo QHD con frecuencia de actualización de 240Hz.",
            especificaciones: {
                tamaño: "27\"",
                frecuencia: "240Hz",
                resolucion: "QHD",
                tecnologia: "Curvo"
            }
        },
        {
            id: 26,
            nombre: "Monitor LG UltraGear 34\" Curvo QHD 160Hz",
            categoria: "monitores",
            marca: "LG",
            precio: 2900000,
            stock: 4,
            imagen: "IMG/Monitor LG UltraGear 34 Curvo QHD 160Hz.jpg",
            descripcion: "Monitor ultra ancho ideal para multitarea y gaming.",
            especificaciones: {
                tamaño: "34\"",
                frecuencia: "160Hz",
                resolucion: "QHD",
                tecnologia: "Curvo UltraWide"
            }
        },
        {
            id: 27,
            nombre: "Refrigeración Líquida NZXT Kraken Z63 280mm",
            categoria: "refrigeracion",
            marca: "NZXT",
            precio: 1150000,
            stock: 6,
            imagen: "IMG/Refrigeración Líquida NZXT Kraken Z63 280mm.jpg",
            descripcion: "Sistema AIO con pantalla LCD personalizable.",
            especificaciones: {
                tipo: "Refrigeración Líquida",
                tamaño: "280mm",
                rgb: "Sí"
            }
        },
        {
            id: 28,
            nombre: "Refrigeración por Aire Noctua NH-D15",
            categoria: "refrigeracion",
            marca: "Noctua",
            precio: 720000,
            stock: 5,
            imagen: "IMG/Refrigeración por Aire Noctua NH-D15.jpg",
            descripcion: "Disipador por aire de alto rendimiento con doble ventilador.",
            especificaciones: {
                tipo: "Aire",
                tamaño: "140mm",
                rgb: "No"
            }
        },
        {
            id: 29,
            nombre: "Kit Memoria RAM Corsair Vengeance 32GB (2x16) 6000MHz DDR5",
            categoria: "ram",
            marca: "Corsair",
            precio: 1050000,
            stock: 12,
            imagen: "IMG/Kit Memoria RAM Corsair Vengeance 32GB (2x16) 6000MHz DDR5.jpg",
            descripcion: "Memoria DDR5 de alto rendimiento para gamers y creadores.",
            especificaciones: {
                capacidad: "32GB (2x16)",
                velocidad: "6000MHz",
                tipo: "DDR5"
            }
        },
        {
            id: 30,
            nombre: "SSD NVMe Samsung 980 Pro 2TB",
            categoria: "almacenamiento",
            marca: "Samsung",
            precio: 950000,
            stock: 15,
            imagen: "IMG/SSD NVMe Samsung 980 Pro 2TB.jpg",
            descripcion: "SSD NVMe de alto rendimiento con interfaz PCIe 4.0.",
            especificaciones: {
                capacidad: "2TB",
                tipo: "NVMe M.2",
                velocidadLectura: "7000MB/s"
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

  // Preparar imagen
  const archivoImagen = document.getElementById("imagen").files[0];
  const procesarProducto = (imagenFinal) => {
    // Crear objeto con formato compatible con el backend
    const producto = {
      nombre: document.getElementById('nombre').value,
      descripcion: document.getElementById('descripcion').value,
      precio: precio,
      stock: stock,
      imagen: imagenFinal,
      categoria: {
        id: parseInt(document.getElementById('categoria').value)
      },
      marca: {
        id: parseInt(document.getElementById('marca').value)
      }
    };
    // Enviar al backend
    fetch('https://n3ymm34g6b.us-east-1.awsapprunner.com/api/productos/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
    .then(response => {
      if (!response.ok) throw new Error('Error al guardar el producto');
      return response.json();
    })
    .then(data => {
      mostrarModal('exito', 'Producto guardado exitosamente', () => {
        limpiarFormularioYCerrarModal(form, camposRequeridos);
        actualizarInterfaz();
      });
    })
    .catch(error => {
      console.error('Error:', error);
      mostrarModal('error', 'Error al guardar el producto');
    });
  };
  if (archivoImagen) {
    const reader = new FileReader();
    reader.onload = function(event) {
      procesarProducto(event.target.result);
    };
    reader.readAsDataURL(archivoImagen);
  } else {
    procesarProducto("tarjeta.jpg");
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

    // Cargar categorías - GET /api/categorias
    fetch('http://localhost:8080/api/categorias')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar categorías: ' + response.status);
        }
        return response.json();
      })
      .then(categorias => {
        const selectCategoria = document.getElementById('categoria');
        if (selectCategoria) {
          selectCategoria.innerHTML = '<option value="">Selecciona categoría</option>';
          categorias.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria.id;
            option.textContent = categoria.nombre;
            selectCategoria.appendChild(option);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Cargar marcas - GET /api/marcas
    fetch('http://localhost:8080/api/marcas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar marcas: ' + response.status);
        }
        return response.json();
      })
      .then(marcas => {
        const selectMarca = document.getElementById('marca');
        if (selectMarca) {
          selectMarca.innerHTML = '<option value="">Selecciona marca</option>';
          marcas.forEach(marca => {
            const option = document.createElement('option');
            option.value = marca.id;
            option.textContent = marca.nombre;
            selectMarca.appendChild(option);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
});


//FECH
// Cargar categorías al cargar la página
fetch('/api/categorias')
  .then(response => response.json())
  .then(categorias => {
    const selectCategoria = document.getElementById('categoria');
    categorias.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria.id;
      option.textContent = categoria.nombre;
      selectCategoria.appendChild(option);
    });
  });

// Cargar marcas - GET /api/marcas
fetch('http://localhost:8080/api/marcas')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar marcas: ' + response.status);
    }
    return response.json();
  })
  .then(marcas => {
    const selectMarca = document.getElementById('marca');
    selectMarca.innerHTML = '<option value="">Selecciona marca</option>';
    
    marcas.forEach(marca => {
      const option = document.createElement('option');
      option.value = marca.id;
      option.textContent = marca.nombre;
      selectMarca.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Manejar envío del formulario
document.getElementById('productoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Crear objeto con formato compatible con el backend
  const producto = {
    nombre: document.getElementById('nombre').value,
    descripcion: document.getElementById('descripcion').value,
    precio: parseFloat(document.getElementById('precio').value),
    stock: parseInt(document.getElementById('stock').value),
    imagen: document.getElementById('imagen').value,
    categoria: {
      id: parseInt(document.getElementById('categoria').value)
    },
    marca: {
      id: parseInt(document.getElementById('marca').value)
    }
  };
  
  // Enviar al backend
  fetch('/api/productos/crear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(producto)
  })
  .then(response => response.json())
  .then(data => {
    alert('Producto guardado exitosamente');
    // Limpiar formulario o redireccionar
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al guardar el producto');
  });
});