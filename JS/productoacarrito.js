// Función para obtener carrito
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
 
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
 
// Renderizar carrito (para la página carrito.html)
function renderCarrito() {
    const carrito = obtenerCarrito();
    const contenedor = document.getElementById("cart-items"); // contenedor en HTML
    const totalDiv = document.getElementById("cart-total");   // total en HTML
    const itemCountDiv = document.getElementById("item-count"); // contador de items
 
    contenedor.innerHTML = "";
    let total = 0;
    let totalItems = 0; // total de unidades
 
    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        itemCountDiv.textContent = "Elementos en el carrito: 0";
        totalDiv.textContent = "Total: $0";
        return;
    }
 
    // Detecta si el HTML actual está en una subcarpeta
    const isSubfolder = window.location.pathname.includes('/HTML/');
 
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        totalItems += item.cantidad;
 
        let rutaImagen = item.imagen;
        if (isSubfolder && !(rutaImagen.startsWith('data:image/'))) {
            rutaImagen = '../' + item.imagen;
        }
 
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
<img src="${rutaImagen}" alt="${item.nombre}" width="60">
<div class="item-info">
<h4>${item.nombre}</h4>
<p>${new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0
                }).format(item.precio)} x ${item.cantidad}</p>
<!-- Controles de cantidad -->
<div class="quantity-controls">
<button class="qty-btn decrease" data-id="${item.id}">-</button>
<span class="qty-number">${item.cantidad}</span>
<button class="qty-btn increase" data-id="${item.id}">+</button>
</div>
</div>
 
            <!-- Botón eliminar -->
<button class="remove-btn" data-id="${item.id}">✖</button>
        `;
        contenedor.appendChild(div);
    });
 
    // Mostrar contador primero y luego total (formato de tu ejemplo)
    itemCountDiv.textContent = `Elementos en el carrito: ${totalItems}`;
    totalDiv.textContent = `Total: ${new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(total)}`;
 
    // Eventos para eliminar
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();
            carrito = carrito.filter(item => item.id != id);
            guardarCarrito(carrito);
            renderCarrito();
        });
    });
 
    // Eventos para aumentar/disminuir
    document.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();
            carrito = carrito.map(item => {
                if (item.id == id) item.cantidad++;
                return item;
            });
            guardarCarrito(carrito);
            renderCarrito();
        });
    });
 
    document.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();
            carrito = carrito.map(item => {
                if (item.id == id && item.cantidad > 1) item.cantidad--;
                return item;
            });
            guardarCarrito(carrito);
            renderCarrito();
        });
    });
}
 
// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", renderCarrito);