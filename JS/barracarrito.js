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

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" width="50">
            
            <div class="cart-item-details">
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

        sidebarItems.appendChild(itemDiv);
    });

    // Total
    const totalFormateado = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(total);

    sidebarTotal.textContent = `Total: ${totalFormateado}`;

    // 🔹 Eventos para eliminar productos
    sidebarItems.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();
            carrito = carrito.filter(item => item.id != id);
            guardarCarrito(carrito);
            renderSidebarCarrito(); // refrescar vista
        });
    });

    // 🔹 Eventos para cambiar cantidad
    sidebarItems.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            let carrito = obtenerCarrito();

            carrito = carrito.map(item => {
                if (item.id == id) {
                    if (btn.classList.contains("increase")) {
                        item.cantidad++;
                    } else if (btn.classList.contains("decrease") && item.cantidad > 1) {
                        item.cantidad--;
                    }
                }
                return item;
            });

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
