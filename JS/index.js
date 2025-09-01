function renderProductCard(producto, container) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        ${producto.nuevo ? '<span class="product-badge">NUEVO</span>' : ''}
        ${!producto.nuevo && producto.descuento > 15 ? '<span class="product-badge">OFERTA</span>' : ''}
        <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
        <div class="product-info">
            <div class="product-category">${producto.categoria.toUpperCase()}</div>
            <h3 class="product-title">${producto.nombre}</h3>
            <div class="product-price">
                <div>
                    <span class="price">${new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0
                    }).format(producto.precio)}</span>
                </div>
            </div>
            <button class="add-to-cart" data-id="${producto.id}">
                <i class="fas fa-shopping-cart"></i> Agregar
            </button>
        </div>
    `;
    container.appendChild(productCard);
}

document.addEventListener("DOMContentLoaded", function () {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Renderizar productos destacados (primeros 6)
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    const primeros6 = productos.slice(0, 6);
    primeros6.forEach(producto => renderProductCard(producto, productsContainer));
    
    // Renderizar productos bajo 1 millón
    const productsUnderMillion = document.getElementById("products-under-million");
    productsUnderMillion.innerHTML = "";
    const productosBaratos = productos
        .filter(producto => producto.precio < 1000000)
        .slice(0, 3); 
    productosBaratos.forEach(producto => renderProductCard(producto, productsUnderMillion));
    
    // Agregar event listeners para los botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                        const productId = this.getAttribute('data-id');
                        const producto = productos.find(p => p.id == productId);
                        if (producto) {
                                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                                let productoEnCarrito = carrito.find(item => item.id == productId);

                                if (productoEnCarrito) {
                                        productoEnCarrito.cantidad++;
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

                                // Mostrar modal de confirmación con info del producto
                                const modal = document.getElementById('modalCarritoAgregado');
                                const info = document.getElementById('modal-producto-info');
                                info.innerHTML = `
                                    <img src="${producto.imagen}" alt="${producto.nombre}">
                                    <div>
                                        <div style="font-weight:600;">${producto.nombre}</div>
                                        <div style="font-size:0.95rem;">Title: ${producto.marca || '-'}</div>
                                    </div>
                                `;
                                modal.style.display = 'flex';
                                setTimeout(() => {
                                    modal.style.display = 'none';
                                }, 2500);
                        }
                });
    });
});




