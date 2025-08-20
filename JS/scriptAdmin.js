// Productos base iniciales
const productosBase = [
  {
    id: 1,
    categoria: "Componentes",
    nombre: "Procesador Intel Core i7 12700K",
    marca: "Intel",
    precio: 1500000,
    stock: 12,
    descripcion: "12 núcleos, 20 hilos, frecuencia base 3.6GHz, ideal para gaming y multitarea.",
    imagen: "tarjeta.jpg", // imagen por defecto
    especificaciones: {
      socket: "LGA1700",
      TDP: "125W",
      graficaIntegrada: "Intel UHD Graphics 770"
    }
  },
  {
    id: 2,
    categoria: "Componentes",
    nombre: "Tarjeta Gráfica NVIDIA RTX 4070 Ti",
    marca: "NVIDIA",
    precio: 4200000,
    stock: 5,
    descripcion: "GPU de última generación con 12GB GDDR6X, soporte Ray Tracing y DLSS 3.",
    imagen: "tarjeta.jpg",
    especificaciones: {
      memoria: "12GB GDDR6X",
      conectores: "3x DisplayPort, 1x HDMI",
      TDP: "285W"
    }
  },
  {
    id: 3,
    categoria: "Zona Gamer",
    nombre: "Silla Gamer Razer Iskur X",
    marca: "Razer",
    precio: 1200000,
    stock: 8,
    descripcion: "Silla ergonómica diseñada para largas sesiones de juego con soporte lumbar.",
    imagen: "tarjeta.jpg",
    especificaciones: {
      material: "Cuero sintético",
      soportePeso: "136kg",
      ajustes: "Altura, reclinación, apoyabrazos 2D"
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
function cargarProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

// guardamos productos en localStorage
function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

// creamos producto desde formulario
function crearProductoDesdeFormulario() {
  return {
    id: productos.length + 1,
    nombre: document.getElementById("nombre").value,
    categoria: document.getElementById("categoria").value,
    marca: document.getElementById("marca").value,
    precio: parseFloat(document.getElementById("precio").value),
    stock: parseInt(document.getElementById("stock").value),
    descripcion: document.getElementById("descripcion").value,
    especificaciones: {
      especificacion1: document.getElementById("especificacion1").value,
      especificacion2: document.getElementById("especificacion2").value,
      especificacion3: document.getElementById("especificacion3").value
    },
    imagen: "tarjeta.jpg" // temporal, se reemplaza si se selecciona archivo
  };
}

// agregar¿mos nuevo producto
function agregarProducto(producto) {
  productos.push(producto);
  guardarProductos(productos);
  console.log("Catálogo actualizado:", productos);
  alert("Producto guardado correctamente");
}

//abrimos modal de crearproducto
function abrirModalCrear() {
  document.getElementById("modalCrear").style.display = "block";
}

// iniciamos productos
inicializarProductos();
let productos = cargarProductos();
console.log("Productos almacenados en localStorage:", productos);

//capturar el form
const form = document.getElementById("formProducto");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const archivoImagen = document.getElementById("imagen").files[0];

  if (archivoImagen) {
    const reader = new FileReader(); // Api 
    reader.onload = function(event) {
      const imagenBase64 = event.target.result;
      const producto = crearProductoDesdeFormulario();
      producto.imagen = imagenBase64; // agregamos imagen al producto
      agregarProducto(producto);
      form.reset();
      document.getElementById("modalCrear").style.display = "none"; // cerrar modal
    };
    reader.readAsDataURL(archivoImagen);
  } else {
    const producto = crearProductoDesdeFormulario();
    producto.imagen = "tarjeta.jpg"; // imagen por defecto
    agregarProducto(producto);
    form.reset();
    document.getElementById("modalCrear").style.display = "none"; // cerrar modal
  }
});


//muestra al cargar la pagina
//mostrarProductos();