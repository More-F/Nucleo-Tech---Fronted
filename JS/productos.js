
// Función para obtener productos del localStorage
function obtenerProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || productosBase;
    console.log('Productos obtenidos del localStorage:', productos); 
    return productos;
}

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById("products-container");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Variable para guardar la categoría seleccionada
    let categoriaSeleccionada = "all";

    // Detecta si el HTML actual está en una subcarpeta
    const isSubfolder = window.location.pathname.includes('/HTML/');

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
            // Ajusta la ruta de la imagen si está en subcarpeta
            let rutaImagen = producto.imagen;
            // Si estamos en subcarpeta y la imagen NO es base64, ajusta la ruta
            if (isSubfolder && !(rutaImagen.startsWith('data:image/'))) {
                rutaImagen = '../' + producto.imagen;
            }
            card.innerHTML = `
                <img src="${rutaImagen}" alt="${producto.nombre}" class="product-image">
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
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-id');
                const producto = obtenerProductos().find(p => p.id == productId);

                if (producto) {
                    // Obtener carrito actual o inicializar vacío
                    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

                    // Verificar si el producto ya existe en el carrito
                    const index = carrito.findIndex(item => item.id == producto.id);

                    if (index >= 0) {
                        // Si ya existe, aumentar cantidad
                        carrito[index].cantidad += 1;
                    } else {
                        // Si no existe, agregarlo con cantidad = 1
                        carrito.push({
                            id: producto.id,
                            nombre: producto.nombre,
                            precio: producto.precio,
                            imagen: producto.imagen,
                            cantidad: 1
                        });
                    }

                    // Guardar carrito actualizado en localStorage
                    localStorage.setItem("carrito", JSON.stringify(carrito));

                    // Mostrar modal de confirmación con info del producto
                    const modal = document.getElementById('modalCarritoAgregado');
                    const info = document.getElementById('modal-producto-info');
                    let rutaImagen = producto.imagen;
                    if (isSubfolder) {
                        rutaImagen = '../' + producto.imagen;
                    }
                    info.innerHTML = `
                        <img src="${rutaImagen}" alt="${producto.nombre}">
                        <div>
                            <div style="font-weight:600;">${producto.nombre}</div>
                            <div style="font-size:0.95rem;">Title: ${producto.marca || '-'}<\/div>
                        <\/div>
                    `;
                    modal.style.display = 'flex';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 2500);
                }
            });
        });
    }

    // Filtrar productos
    function filtrarProductos(categoria) {
        console.log('Filtrando por categoría:', categoria); 
        categoriaSeleccionada = categoria; 
        const productos = obtenerProductos();
        console.log('Productos obtenidos:', productos); 

        let productosMostrar;
        if (categoria === "all") {
            productosMostrar = productos;
        } else {
            productosMostrar = productos.filter(p => {
                const categoriaProducto = p.categoria.toLowerCase().trim();
                const categoriaFiltro = categoria.toLowerCase().trim();
                console.log('Comparando categorías:', categoriaProducto, categoriaFiltro);
                return categoriaProducto === categoriaFiltro;
            });
        }
        console.log('Productos filtrados:', productosMostrar); 
        renderProductos(productosMostrar);
    }

    // Eventos de botones de categoría
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log('Botón de categoría clickeado:', btn.dataset.category); 
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtrarProductos(btn.dataset.category);
        });
    });

    // Inicialización: mostrar todos los productos
    filtrarProductos("all");
});



