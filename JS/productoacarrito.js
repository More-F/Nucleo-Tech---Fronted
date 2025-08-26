// Función para obtener carrito
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Renderizar carrito (para la página carrito.html o sidebar)
function renderCarrito() {
    const carrito = obtenerCarrito();
    const contenedor = document.getElementById("cart-items"); // contenedor en HTML
    const totalDiv = document.getElementById("cart-total");   // total en HTML

    contenedor.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        totalDiv.textContent = "Total: $0";
        return;
    }

    carrito.forEach(item => {
        total += item.precio * item.cantidad;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" width="60">
            <div>
                <h4>${item.nombre}</h4>
                <p>${new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0
                }).format(item.precio)} x ${item.cantidad}</p>
            </div>
            <button class="remove-btn" data-id="${item.id}">✖</button>
        `;
        contenedor.appendChild(div);
    });

    totalDiv.textContent = `Total: ${new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(total)}`;
    
    document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        let carrito = obtenerCarrito();
        carrito = carrito.filter(item => item.id != id); // eliminamos producto
        guardarCarrito(carrito);
        renderCarrito(); // recargar vista
        });
    });
}

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", renderCarrito);


