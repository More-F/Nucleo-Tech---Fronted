// Función para obtener productos del localStorage
function obtenerProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || productosBase;
    console.log('Productos obtenidos del localStorage:', productos);
    return productos;
}

// Función para guardar el id del producto seleccionado y redirigir al detalle
//function verDetalle(id) {
 //   localStorage.setItem("productoSeleccionado", id);
  //  window.location.href = "detalle.html"; // Redirige seguro al detalle
//}

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById("products-container");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Variable para guardar la categoría seleccionada
    let categoriaSeleccionada = "all";

    // Detecta si el HTML actual está en una subcarpeta
    const isSubfolder = window.location.pathname.includes('/HTML/');

    // Renderizar productos
    function renderProductos(lista) {
        console.log('Renderizando lista de productos:', lista);
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
                <a href="javascript:void(0)" onclick="verDetalle(${producto.id})">
                    <img src="${rutaImagen}" alt="${producto.nombre}" class="product-image">
                </a>
                <div class="product-info">
                    <div class="product-category">${producto.categoria.toUpperCase()}</div>
                    <a href="javascript:void(0)" onclick="verDetalle(${producto.id})">
                        <h3 class="product-title">${producto.nombre}</h3>
                    </a>
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

                const user = JSON.parse(localStorage.getItem('sesion'));
                if (!user) {
                    // Modal personalizado para login/registro
                    let modal = document.getElementById('modal-login-required');
                    if (!modal) {
                        modal = document.createElement('div');
                        modal.id = 'modal-login-required';
                        modal.className = 'modal-carrito-agregado';
                        modal.style.display = 'flex';
                        modal.innerHTML = `
                        <div class="modal-content">
                            <span class="close" onclick="document.getElementById('modal-login-required').style.display='none'">&times;</span>
                            <div class="modal-body">
                                <div class="modal-check" style="color:#ff4444;">&#9888;</div>
                                <span style="font-weight:600;">Debes iniciar sesión o crear una cuenta para agregar productos al carrito.</span>
                                <div style="display:flex;gap:12px;justify-content:center;margin-top:12px;">
                                    <button class="btn-ver-carrito" style="background:#235884;color:#fff;" onclick="window.location.href='/HTML/login.html'">Iniciar sesión</button>
                                    <button class="btn-ver-carrito" style="background:#9bc53d;color:#222;" onclick="window.location.href='/HTML/create-account.html'">Crear cuenta</button>
                                </div>
                            </div>
                        </div>
                    `;
                        document.body.appendChild(modal);
                    } else {
                        modal.style.display = 'flex';
                    }
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 4000);
                    return;
                } 

                if (producto) {
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

                    const modal = document.getElementById('modalCarritoAgregado');
                    const info = document.getElementById('modal-producto-info');
                    // Ajustar ruta de imagen para el modal igual que en renderProductos
                    let rutaImagenModal = producto.imagen;
                    if (isSubfolder && !(rutaImagenModal.startsWith('data:image/'))) {
                        rutaImagenModal = '../' + producto.imagen;
                    }
                    info.innerHTML = `
                            <div style="display:flex;align-items:center;gap:16px;">
                                <img src="${rutaImagenModal}" alt="${producto.nombre}" style="width:80px;height:80px;object-fit:contain;border-radius:8px;box-shadow:0 2px 8px #0002;">
                                <div>
                                    <div style="font-weight:600;font-size:1.1rem;">${producto.nombre}</div>
                                    <div style="font-size:0.95rem;color:#555;">Marca: ${producto.marca || '-'} </div>
                                </div>
                            </div>
                        `;
                    modal.style.display = 'flex';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 2500);
                    updateCartCount();
                } 
            });
        });
    }

    // Filtrar productos
    function filtrarProductos(categoria) {
        console.log('Filtrando por categoría:', categoria);
        categoriaSeleccionada = categoria;
        const productos = obtenerProductos();

        let productosMostrar;
        if (categoria === "all") {
            productosMostrar = productos;
        } else {
            productosMostrar = productos.filter(p => {
                const categoriaProducto = p.categoria.toLowerCase().trim();
                const categoriaFiltro = categoria.toLowerCase().trim();
                return categoriaProducto === categoriaFiltro;
            });
        }
        renderProductos(productosMostrar);
    }

    // Eventos de botones de categoría
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtrarProductos(btn.dataset.category);
        });
    });

    // Inicialización: mostrar todos los productos
    filtrarProductos("all");
});

function updateCartCount() {
    const cartCountSpan = document.getElementById('cart-count');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let count = carrito.reduce((total, item) => total + (item.cantidad || 1), 0);
    if (count === 0) {
        cartCountSpan.style.display = 'none';
        return;
    }
    let text = count;
    if (count > 10 && count < 20) {
        text = '10+';
    } else if (count >= 20) {
        text = '20+';
    }
    cartCountSpan.textContent = text;
    cartCountSpan.style.display = 'flex';
}
// Llama la función al cargar la página y cada vez que cambie el carrito
document.addEventListener('DOMContentLoaded', updateCartCount);
window.addEventListener('storage', updateCartCount);