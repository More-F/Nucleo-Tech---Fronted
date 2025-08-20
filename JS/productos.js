// Base de datos de productos (normalmente esto vendría de un servidor)
const productos = [
    {
        id: 1,
        nombre: "Gabinete Gamer XYZ AIRONE 100 MESH 6 Ventiladores aRGB WHITE",
        categoria: "chasis",
        precio: 99.99,
        precioAnterior: 129.99,
        imagen: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 23
    },
    {
        id: 2,
        nombre: "Chasis Gamer Iceberg Crystal Wave Blanco M-ATX 3 Ventiladores ARGB Maxi Infinity",
        categoria: "chasis",
        precio: 69.99,
        precioAnterior: 89.99,
        imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 22
    },
    {
        id: 3,
        nombre: "Gabinete Gamer XYZ AIRONE 100 MESH 6 Ventiladores aRGB",
        categoria: "chasis",
        precio: 89.99,
        precioAnterior: 119.99,
        imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 25
    },
    {
        id: 4,
        nombre: "Chasis Aerocool Ore Saturn FRGB Vidrio Templado",
        categoria: "chasis",
        precio: 59.99,
        precioAnterior: 79.99,
        imagen: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 25
    },
    {
        id: 5,
        nombre: "Fuente de Poder 80 Plus Gold 750W Modular",
        categoria: "fuentes",
        precio: 109.99,
        precioAnterior: 129.99,
        imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 15
    },
    {
        id: 6,
        nombre: "Fuente de Alimentación 850W 80 Plus Bronze",
        categoria: "fuentes",
        precio: 79.99,
        precioAnterior: 99.99,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 20
    },
    {
        id: 7,
        nombre: "Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6",
        categoria: "tarjetas-video",
        precio: 699.99,
        precioAnterior: 799.99,
        imagen: "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 13
    },
    {
        id: 8,
        nombre: "Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB",
        categoria: "tarjetas-video",
        precio: 549.99,
        precioAnterior: 649.99,
        imagen: "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 15
    },
    {
        id: 9,
        nombre: "Teclado Mecánico Gamer RGB Switch Blue",
        categoria: "teclados-mouse",
        precio: 89.99,
        precioAnterior: 119.99,
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 25
    },
    {
        id: 10,
        nombre: "Mouse Inalámbrico Gamer 16000DPI RGB",
        categoria: "teclados-mouse",
        precio: 49.99,
        precioAnterior: 69.99,
        imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 29
    },
    {
        id: 11,
        nombre: "Monitor Gaming 27\" 144Hz 1ms FreeSync",
        categoria: "monitores",
        precio: 249.99,
        precioAnterior: 299.99,
        imagen: "https://images.unsplash.com/photo-1649779240006-0b3a011e3cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 17
    },
    {
        id: 12,
        nombre: "Monitor Curvo 32\" 165Hz QHD",
        categoria: "monitores",
        precio: 349.99,
        precioAnterior: 399.99,
        imagen: "https://images.unsplash.com/photo-1592656094267-764a4516085c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 13
    },
    {
        id: 13,
        nombre: "Sistema de Refrigeración Líquida CPU 240mm RGB",
        categoria: "refrigeracion",
        precio: 119.99,
        precioAnterior: 149.99,
        imagen: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: false,
        descuento: 20
    },
    {
        id: 14,
        nombre: "Ventiladores RGB 120mm Pack de 3",
        categoria: "refrigeracion",
        precio: 49.99,
        precioAnterior: 69.99,
        imagen: "https://images.unsplash.com/photo-160x/57/d/15/computer-fan-1000x1000.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        nuevo: true,
        descuento: 29
    }
];

// Función para renderizar productos
function renderProductos(categoria = 'all') {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    // Filtrar productos por categoría
    let productosFiltrados = categoria === 'all' 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);
    
    if (productosFiltrados.length === 0) {
        productsContainer.innerHTML = '<div class="no-products">No hay productos en esta categoría</div>';
        return;
    }
    
    // Crear HTML para cada producto
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            ${producto.nuevo ? '<span class="product-badge">NUEVO</span>' : ''}
            ${!producto.nuevo && producto.descuento > 15 ? '<span class="product-badge">OFERTA</span>' : ''}
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <div class="product-info">
                <div class="product-category">${producto.categoria.toUpperCase()}</div>
                <h3 class="product-title">${producto.nombre}</h3>
                <div class="product-price">
                    <div>
                        <span class="old-price">$${producto.precioAnterior.toFixed(2)}</span>
                        <span class="price">$${producto.precio.toFixed(2)}</span>
                    </div>
                    <span class="discount">${producto.descuento}%</span>
                </div>
                <button class="add-to-cart" data-id="${producto.id}">
                    <i class="fas fa-shopping-cart"></i> Agregar
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const producto = productos.find(p => p.id == productId);
            alert(`¡${producto.nombre} agregado al carrito!`);
        });
    });
}

// Funcionalidad para las categorías
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos los productos al cargar
    renderProductos('all');
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover la clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar la clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría del data attribute
            const categoria = this.getAttribute('data-category');
            
            // Renderizar productos de esa categoría
            renderProductos(categoria);
        });
    });
});