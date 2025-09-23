document.addEventListener("DOMContentLoaded", () => {
  // Obtener ID guardado en localStorage
  const idProducto = localStorage.getItem("productoSeleccionado");
  console.log("ID del producto seleccionado:", idProducto);

  // Obtener productos (igual que en productos.js)
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  console.log("Productos en localStorage:", productos);

  // Buscar producto con ese ID
  const producto = productos.find(p => p.id == idProducto);
  console.log("Producto encontrado:", producto);

  if (!producto) {
    document.querySelector(".product-detail").innerHTML =
      "<p>Producto no encontrado.</p>";
    return;
  }

  // Llenar datos en el detalle.html
  document.querySelector(".main-image").src = producto.imagen;
  document.querySelector(".main-image").alt = producto.nombre;

  document.querySelector(".product-title").textContent = producto.nombre;
  document.querySelector(".product-sku").textContent = producto.sku || "SKU no disponible";

  document.querySelector(".price").textContent = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(producto.precio);

  document.querySelector(".short-description").textContent = producto.descripcion || "";

  // Descripción larga
  const longDesc = document.querySelector(".long-description p");
  if (longDesc) {
    longDesc.textContent = producto.descripcionLarga || "Sin descripción adicional.";
  }

  // --- Añadir al carrito desde detalle ---
  document.querySelector(".add-to-cart").addEventListener("click", () => {
    // 🔹 Verificar sesión usando sessionManager (tanto localStorage como backend)
    const puedeAgregar = window.sessionManager ? 
        window.sessionManager.puedeAgregarAlCarrito() : 
        (JSON.parse(localStorage.getItem('sesion')) || JSON.parse(localStorage.getItem('usuario')));
    
    if (!puedeAgregar) {
        // Usar sessionManager si está disponible, sino mostrar alert
        if (window.sessionManager) {
            window.sessionManager.mostrarMensajeLoginRequerido();
            return;
        } else {
            alert("Debes iniciar sesión para agregar productos al carrito.");
            window.location.href = "login.html";
            return;
        }
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.id == producto.id);

    if (index >= 0) {
      carrito[index].cantidad += 1;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto añadido al carrito: " + producto.nombre);
  });

  // --- Comprar ahora ---
  document.querySelector(".buy-now").addEventListener("click", () => {
    localStorage.setItem("compraDirecta", JSON.stringify(producto));
    window.location.href = "carritodecompra.html";
  });
});
