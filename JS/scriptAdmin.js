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
 
// agregar¿mos nuevo producto
function agregarProducto(producto,productos) {
  productos.push(producto);
  guardarProductos(productos);
  console.log("Catálogo actualizado:", productos);
  alert("Producto guardado correctamente");
  mostrarProductos();
}
 
//abrimos modal de crearproducto
function abrirModalCrear() {
  document.getElementById("modalCrear").style.display = "block";
}
 
// iniciamos productos
inicializarProductos();
let productos = obtenerProductos();
console.log("Productos almacenados en localStorage:", productos);
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
 
//EDITAR PRODUCTO
 
// Función para abrir el modal y cargar datos
function abrirModalEditar(id) {
  // Buscar producto por id en tu array de productos
  const producto = productos.find(p => p.id === id);
 
  if (producto) {
    // Llenar los inputs del modal con los datos del producto
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('categoria').value = producto.categoria;
    document.getElementById('marca').value = producto.marca;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('stock').value = producto.stock;
 
    // Guardar el id en un atributo para usarlo luego al guardar cambios
    document.querySelector('.form-editar').setAttribute('data-id', id);
 
    // Mostrar modal
    document.getElementById('modalEditar').style.display = 'block';
  }
}
 
// Manejar el submit del formulario
document.querySelector('.form-editar').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const id = parseInt(this.getAttribute('data-id'));
 
  // Buscar el producto en el array
  const producto = productos.find(p => p.id === id);
 
  if (producto) {
    // Actualizar datos
    producto.nombre = document.getElementById('nombre').value;
    producto.categoria = document.getElementById('categoria').value;
    producto.marca = document.getElementById('marca').value;
    producto.precio = parseFloat(document.getElementById('precio').value);
    producto.stock = parseInt(document.getElementById('stock').value);
 
    // Cerrar modal
    document.getElementById('modalEditar').style.display = 'none';
 
    // Renderizar la tabla de nuevo
    mostrarProductos();
  }
});
 
 

//MOSTRAR PRODUCTOS EN EL CATALOGO 
// Función para renderizar productos
function renderProductos(categoria = 'all') {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    // Filtrar productos por categoría
    let productosFiltrados = categoria === 'all'
        ? productos
        : productos.filter(producto => producto.categoria === categoria);

    if (productosFiltrados.length === 0) {
        productsContainer.innerHTML = '<div class="no-products">No hay productos en esta categoría</div>';
        return;
    }

    // Crear HTML para cada producto
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
      <div class="product-category">${producto.categoria.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        
        <span class="price">${new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0
        }).format(producto.precio)
            }</span>
                <button class="add-to-cart" data-id="${producto.id}">
                    <i class="fas fa-shopping-cart"></i> Agregar
                </button>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });

    // Agregar event listeners a los botones de carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const producto = productos.find(p => p.id == productId);
            alert(`¡${producto.nombre} agregado al carrito!`);
        });
    });
}

// Funcionalidad para las categorías
document.addEventListener('DOMContentLoaded', function () {
    // Renderizar todos los productos al cargar
    renderProductos('all');

    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remover la clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar la clase active al botón clickeado
            this.classList.add('active');

            // Obtener la categoría del data attribute
            const categoria = this.getAttribute('data-category');

            // Renderizar productos de esa categoría
            renderProductos(categoria);
        });
    });
});
