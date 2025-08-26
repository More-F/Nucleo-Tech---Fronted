
// Función para obtener productos del localStorage
function obtenerProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || productosBase;
    console.log('Productos obtenidos del localStorage:', productos); // Debug
    return productos;
}

// Elementos del DOM
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById("products-container");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Variable para guardar la categoría seleccionada
    let categoriaSeleccionada = "all";

    // Renderizar productos
    function renderProductos(lista) {
        console.log('Renderizando lista de productos:', lista); // Debug
        productsContainer.innerHTML = "";

        if (!lista || lista.length === 0) {
            productsContainer.innerHTML = `<p>No hay productos en esta categoría.</p>`;
            return;
        }

        lista.forEach(producto => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <div class="product-info">
                    <div class="product-category">${producto.categoria.toUpperCase()}</div>
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <span class="price">${new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0
                    }).format(producto.precio)}</span>
                    <button class="add-to-cart" data-id="${producto.id}">
                        <i class="fas fa-shopping-cart"></i> Agregar
                    </button>
                </div>
            `;
            productsContainer.appendChild(card);
        });

        // Agregar event listeners a los botones de carrito
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const producto = obtenerProductos().find(p => p.id == productId);
                alert(`¡${producto.nombre} agregado al carrito!`);
            });
        });
    }

    // Filtrar productos
    function filtrarProductos(categoria) {
        console.log('Filtrando por categoría:', categoria); // Debug
        categoriaSeleccionada = categoria; // guardamos la última categoría usada
        const productos = obtenerProductos();
        console.log('Productos obtenidos:', productos); // Debug
        
        let productosMostrar;
        if (categoria === "all") {
            productosMostrar = productos;
        } else {
            // Normalizar las categorías para la comparación
            productosMostrar = productos.filter(p => {
                // Convertir ambas categorías a minúsculas y eliminar espacios extras
                const categoriaProducto = p.categoria.toLowerCase().trim();
                const categoriaFiltro = categoria.toLowerCase().trim();
                console.log('Comparando categorías:', categoriaProducto, categoriaFiltro);
                return categoriaProducto === categoriaFiltro;
            });
        }
        console.log('Productos filtrados:', productosMostrar); // Debug
        renderProductos(productosMostrar);
    }

    // Eventos de botones de categoría
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log('Botón de categoría clickeado:', btn.dataset.category); // Debug
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtrarProductos(btn.dataset.category);
        });
    });

    // Inicialización: mostrar todos los productos
    filtrarProductos("all");
});



