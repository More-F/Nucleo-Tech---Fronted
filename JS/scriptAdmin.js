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
    imagen: "https://tse4.mm.bing.net/th/id/OIP.kOPVZocyX5MPdTLVZygitAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", // imagen por defecto
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
        imagen: "https://clonesyperifericos.com/wp-content/uploads/2025/08/Monitor-MSI-GAMING-32-321CUP-QD-OLED-4K-165HZ-0.03MS.webp",
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
        imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 2007002,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 109.99,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 79.99,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 699.99,
        stock: 3,
        imagen: "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 549.99,
        stock: 3,
        imagen: "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 89.99,
        stock: 20,
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 49.99,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
        precio: 249.99,
        stock: 5,
        imagen: "https://th.bing.com/th/id/R.b9a527427cb27861be9374f4476e9d77?rik=sYxT2rX1UFni6A&pid=ImgRaw&r=0",
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
        precio: 349.99,
        stock: 3,
        imagen: "https://tse2.mm.bing.net/th/id/OIP.4stnZL5HyQQkBi4_dS5dDwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
        precio: 119.99,
        stock: 10,
        imagen: "https://tse2.mm.bing.net/th/id/OIP.4stnZL5HyQQkBi4_dS5dDwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
        precio: 49.99,
        stock: 20,
        imagen: "https://m.media-amazon.com/images/I/71+PJTW+toL._SL1500_.jpg",
        descripcion: "Ventiladores RGB 120mm Pack de 3, ideales para mejorar la refrigeración de tu PC.",
        especificaciones: {
          tipo: "Ventilador",
          tamaño: "120mm",
          rgb: "Sí"
        }
    }
];
 
// iniciamos local con producto base
function inicializarProductos() {
  if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(productosBase));
  }
}
 
// recupera desde el local
function obtenerProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}
 
// guardamos productos en localStorage
function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}
 
// creamos producto desde formulario
function validarDatosProducto(esEdicion = false, idExistente = null) {
  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const categoria = document.getElementById("categoria").value;
  const marca = document.getElementById("marca").value.trim();
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;
  const descripcion = document.getElementById("descripcion").value.trim();
  const especificacion1 = document.getElementById("especificacion1").value.trim();
  const especificacion2 = document.getElementById("especificacion2").value.trim();
  const especificacion3 = document.getElementById("especificacion3").value.trim();

  // Validaciones
  let errores = [];

  // Validar nombre
  if (!nombre) {
    errores.push("El nombre del producto es obligatorio");
  } else if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres");
  } else if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\-_.,()&!@#%]+$/.test(nombre)) {
    errores.push("El nombre contiene caracteres no válidos");
  }

  // Validar categoría
  if (!categoria) {
    errores.push("La categoría es obligatoria");
  }

  // Validar marca
  if (!marca) {
    errores.push("La marca es obligatoria");
  } else if (marca.length < 2) {
    errores.push("La marca debe tener al menos 2 caracteres");
  }

  // Validar precio
  if (!precio) {
    errores.push("El precio es obligatorio");
  } else if (isNaN(parseFloat(precio)) || parseFloat(precio) <= 0) {
    errores.push("El precio debe ser un número mayor a 0");
  } else if (parseFloat(precio) > 10000000) {
    errores.push("El precio no puede ser mayor a 10,000,000");
  }

  // Validar stock
  if (!stock) {
    errores.push("El stock es obligatorio");
  } else if (isNaN(parseInt(stock)) || parseInt(stock) < 0) {
    errores.push("El stock debe ser un número entero no negativo");
  } else if (parseInt(stock) > 10000) {
    errores.push("El stock no puede ser mayor a 10,000 unidades");
  }

  // Validar descripción
  if (!descripcion) {
    errores.push("La descripción es obligatoria");
  } else if (descripcion.length < 10) {
    errores.push("La descripción debe tener al menos 10 caracteres");
  }

  // Validar nombre único (solo para creación, no edición)
  if (!esEdicion && productos.some(p => p.nombre.toLowerCase() === nombre.toLowerCase())) {
    errores.push("Ya existe un producto con ese nombre");
  }

  // Si hay errores, mostrarlos
  if (errores.length > 0) {
    mostrarErrores(errores);
    return null;
  }

  // Retornar objeto validado
  return {
    nombre: nombre,
    categoria: categoria,
    marca: marca,
    precio: parseFloat(parseFloat(precio).toFixed(2)),
    stock: Math.max(0, parseInt(stock)),
    descripcion: descripcion,
    especificaciones: {
      especificacion1: especificacion1 || "No especificado",
      especificacion2: especificacion2 || "No especificado",
      especificacion3: especificacion3 || "No especificado"
    }
  };
}

function mostrarErrores(errores) {
  const mensaje = "Errores en el formulario:\n\n• " + errores.join("\n• ");
  alert(mensaje);
}

function crearProductoDesdeFormulario() {
  const productoValidado = validarDatosProducto();
  
  if (!productoValidado) {
    return null;
  }

  return {
    id: Math.max(...productos.map(p => p.id), 0) + 1, // Mejor forma de generar ID
    ...productoValidado,
    imagen: "tarjeta.jpg" // temporal
  };
}
 
// agregar¿mos nuevo producto
function agregarProducto(producto) {
  if (!producto) {
    console.error("No se pudo agregar el producto: datos inválidos");
    return false;
  }

  productos.push(producto);
  guardarProductos(productos);
  console.log("Catálogo actualizado:", productos);
  alert("Producto guardado correctamente");
  return true;
}
 
//abrimos modal de crearproducto
function abrirModalCrear() {
  document.getElementById("modalCrear").style.display = "block";
  // Limpiar errores previos
  limpiarEstilosError();
}
 
// iniciamos productos
inicializarProductos();
let productos = obtenerProductos();
console.log("Productos almacenados en localStorage:", productos);

//capturar el form
const form = document.getElementById("formProducto");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const producto = crearProductoDesdeFormulario();
  if (!producto) return;

  const archivoImagen = document.getElementById("imagen").files[0];

  if (archivoImagen) {
    const reader = new FileReader();
    reader.onload = function(event) {
      producto.imagen = event.target.result;
      guardarYCerrar(producto);
    };
    reader.readAsDataURL(archivoImagen);
  } else {
    guardarYCerrar(producto);
  }
});

function guardarYCerrar(producto) {
  if (agregarProducto(producto)) {
    form.reset();
    document.getElementById("modalCrear").style.display = "none";
    mostrarProductos(); // Actualizar tabla
  }
}

// MOSTRAR PRODUCTOS EN LA TABLA
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
        <td>$${prod.precio}</td>
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
 
//capturar el form
const form = document.getElementById("formProducto");
form.addEventListener("submit", function(e) {
  e.preventDefault();
 
  const archivoImagen = document.getElementById("imagen").files[0];
 
  if (archivoImagen) {
    const reader = new FileReader(); // Api
    reader.onload = function(event) {
      const imagenBase64 = event.target.result;
      const producto = crearProductoDesdeFormulario(form, productos, imagenBase64);
       agregarProducto(producto, productos);
      form.reset()
      document.getElementById("modalCrear").style.display = "none"; // cerrar modal
    };
    reader.readAsDataURL(archivoImagen);
  } else {
    const producto = crearProductoDesdeFormulario(form, productos, "tarjeta.jpg");
    agregarProducto(producto, productos);
    form.reset();
    document.getElementById("modalCrear").style.display = "none"; // cerrar modal
  }
});
 
  // Llamar al cargar
mostrarProductos();

agregarProducto(producto);
productos = obtenerProductos(); // refrescar lista
mostrarProductos();  

//EDITAR PRODUCTO
 
// Función para abrir el modal y cargar datos
function abrirModalEditar(id) {
  // Buscar producto por id en tu array de productos
  const producto = productos.find(p => p.id === id);
 
  if (producto) {
    // Llenar formulario
    document.getElementById("editNombre").value = producto.nombre;
    document.getElementById("editCategoria").value = producto.categoria;
    document.getElementById("editMarca").value = producto.marca;
    document.getElementById("editPrecio").value = producto.precio;
    document.getElementById("editStock").value = producto.stock;
    document.getElementById("editDescripcion").value = producto.descripcion;
    
    // Guardar ID para luego
    document.getElementById("formEditar").dataset.id = id;
    
    // Mostrar modal
    document.getElementById("modalEditar").style.display = "block";
  }
}
 
// Manejar el submit del formulario
document.querySelector('.form-editar').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const id = parseInt(this.getAttribute('data-id'));
  // Buscar el producto en el array
  const producto = productos.findIndex(p => p.id === id);

  if (productoIndex !== -1) {
    // Validar datos editados
    const nombre = document.getElementById("editNombre").value.trim();
    const precio = parseFloat(document.getElementById("editPrecio").value);
    const stock = parseInt(document.getElementById("editStock").value);
    
    // Validaciones básicas
    if (!nombre || nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    }
    
    if (isNaN(precio) || precio <= 0) {
      alert("El precio debe ser un número mayor a 0");
      return;
    }
    
    if (isNaN(stock) || stock < 0) {
      alert("El stock debe ser un número entero no negativo");
      return;
    }
    
    // Actualizar producto
    productos[productoIndex] = {
      ...productos[productoIndex],
      nombre: nombre,
      categoria: document.getElementById("editCategoria").value,
      marca: document.getElementById("editMarca").value.trim(),
      precio: precio,
      stock: stock,
      descripcion: document.getElementById("editDescripcion").value.trim()
    };
    
    guardarProductos(productos);
    document.getElementById("modalEditar").style.display = "none";
    mostrarProductos();
    alert("Producto actualizado correctamente");
  }
});

function eliminarProducto(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
    productos = productos.filter(p => p.id !== id);
    guardarProductos(productos);
    mostrarProductos();
    alert("Producto eliminado correctamente");
  }
}

function limpiarEstilosError() {
  // Limpiar estilos de error de todos los campos
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.style.borderColor = '';
  });
}


// Iniciar productos

console.log("Productos almacenados en localStorage:", productos);

// Mostrar productos al cargar
mostrarProductos();

// Agregar validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  // Validación en tiempo real para campos numéricos
  const camposNumericos = ['precio', 'stock', 'editPrecio', 'editStock'];
  
  camposNumericos.forEach(id => {
    const campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener('input', function(e) {
        const value = e.target.value;
        if (value && (isNaN(parseFloat(value)) || parseFloat(value) < 0)) {
          e.target.style.borderColor = 'red';
        } else {
          e.target.style.borderColor = '';
        }
      });
    }
  });
});

//muestra al cargar la pagina
//mostrarProductos();