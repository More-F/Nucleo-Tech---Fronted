const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.querySelector('.overlay');

// 🔹 Función para obtener carrito del localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// 🔹 Función para guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// 🔹 Función para renderizar productos en el sidebar
function renderSidebarCarrito() {
    const carrito = obtenerCarrito();
    const sidebarItems = document.getElementById("cart-items");
    const sidebarTotal = document.getElementById("cart-total");

    let total = 0;
    sidebarItems.innerHTML = "";

    if (carrito.length === 0) {
        sidebarItems.innerHTML = "<p>El carrito está vacío.</p>";
        sidebarTotal.textContent = "Total: $0";
        return;
    }

    carrito.forEach(item => {
        total += item.precio * item.cantidad;

        const itemHTML = `
            <div class="cart-item">
                <img src="${item.imagen}" alt="${item.nombre}" width="50">
                <div class="cart-item-details">
                    <h4>${item.nombre}</h4>
                    <p>${new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0
                    }).format(item.precio)} x ${item.cantidad}</p>
                </div>
                <!-- Botón eliminar -->
                <button class="remove-btn" data-id="${item.id}">✖</button>
            </div>
        `;

        sidebarItems.innerHTML += itemHTML;
    });

    // Total
    const totalFormateado = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(total);

    sidebarTotal.textContent = `Total: ${totalFormateado}`;

    // 🔹 Eventos para eliminar productos
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();
            carrito = carrito.filter(item => item.id != id);
            guardarCarrito(carrito);
            renderSidebarCarrito(); // refrescar vista
        });
    });
}

// 🔹 Abrir carrito
cartBtn.addEventListener('click', () => {
    renderSidebarCarrito(); // refresca contenido al abrir
    cartSidebar.classList.add('active');
    overlay.style.display = 'block';
});

// 🔹 Cerrar con X
closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.style.display = 'none';
});

// 🔹 Cerrar clic en overlay
overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.style.display = 'none';
});
