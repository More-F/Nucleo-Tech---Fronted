// Función simple para obtener productos del backend sin tocar localStorage
async function obtenerProductosBackendParaIndex() {
    try {
        const response = await fetch('https://n3ymm34g6b.us-east-1.awsapprunner.com/api/productos');
        if (!response.ok) throw new Error('Backend no disponible');
        
        const productosBackend = await response.json();
        console.log('✅ Productos del backend para index:', productosBackend);
        
        // Adaptar formato para el index
        return productosBackend.map(prod => ({
            id: `backend_${prod.id}`,
            categoria: prod.categoria?.nombre || 'general',
            nombre: prod.nombre,
            marca: prod.marca?.nombre || 'Sin marca',
            precio: prod.precio,
            stock: prod.stock,
            descripcion: prod.descripcion || '',
            imagen: prod.imagenUrl || 'IMG/producto-default.jpg', // ← USAR imagenUrl
            especificaciones: prod.especificaciones || {},
            nuevo: false,
            descuento: 0
        }));
    } catch (error) {
        console.warn('⚠️ No se pudieron cargar productos del backend:', error);
        return [];
    }
}

function renderProductCard(producto, container) {
    const productCard = document.createElement("a"); // Cambiado de div a a
    productCard.className = "product-card";
    productCard.href = `/HTML/detalle.html?id=${producto.id}`; // Aquí va la página de detalle con query param
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

//Funcionalidad de compatiblidad hasta 156
document.addEventListener("DOMContentLoaded", async function () {
    // Compatibilidad: buscador con resultados y compatibles
    const buscador = document.getElementById('buscadorCompatibilidad');
    const listaCompatibilidad = document.getElementById('listaCompatibilidad');
    const dropdown = document.getElementById('dropdownCompatibilidad');
    if (buscador && listaCompatibilidad && dropdown) {
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        // Generar compatibilidad inteligente por especificaciones
        const compatibilidad = {};
        productos.forEach(p => {
            let compatibles = [];
            if (p.categoria === 'tarjetas-video') {
                // Compatibles con fuentes de poder (potencia >= 650W), chasis (ATX), procesadores (arquitectura compatible)
                compatibles = productos.filter(other => {
                    if (other.categoria === 'fuentes') {
                        // Potencia mínima recomendada para tarjetas de video modernas
                        const potencia = parseInt(other.especificaciones?.potencia);
                        return potencia >= 650;
                    }
                    if (other.categoria === 'chasis') {
                        // Chasis ATX o Mid Tower
                        return (other.especificaciones?.tipo?.toLowerCase().includes('atx'));
                    }
                    if (other.categoria === 'procesadores') {
                        // Procesadores con gráfica integrada o arquitectura moderna
                        return other.especificaciones?.graficaIntegrada !== 'No';
                    }
                    return false;
                });
            } else if (p.categoria === 'procesadores') {
                // Compatibles con motherboards (por socket), RAM (por tipo), refrigeración (por tipo)
                compatibles = productos.filter(other => {
                    if (other.categoria === 'ram') {
                        // DDR4 o DDR5 según procesador
                        if (p.especificaciones?.socket === 'LGA1700') {
                            return other.especificaciones?.tipo === 'DDR5';
                        }
                        if (p.especificaciones?.socket === 'AM5') {
                            return other.especificaciones?.tipo === 'DDR5';
                        }
                        return other.especificaciones?.tipo === 'DDR4';
                    }
                    if (other.categoria === 'refrigeracion') {
                        // Todos los sistemas de refrigeración
                        return true;
                    }
                    if (other.categoria === 'chasis') {
                        // Chasis ATX o Mid Tower
                        return (other.especificaciones?.tipo?.toLowerCase().includes('atx'));
                    }
                    return false;
                });
            } else if (p.categoria === 'monitores') {
                // Compatibles con teclados, mouse
                compatibles = productos.filter(other => {
                    return ['teclados-mouse'].includes(other.categoria);
                });
            } else if (p.categoria === 'fuentes') {
                // Compatibles con tarjetas de video y chasis
                compatibles = productos.filter(other => {
                    return ['tarjetas-video', 'chasis'].includes(other.categoria);
                });
            } else if (p.categoria === 'ram') {
                // Compatibles con procesadores y motherboards
                compatibles = productos.filter(other => {
                    return ['procesadores'].includes(other.categoria);
                });
            } else if (p.categoria === 'almacenamiento') {
                // Compatibles con motherboards y chasis
                compatibles = productos.filter(other => {
                    return ['chasis'].includes(other.categoria);
                });
            } else if (p.categoria === 'refrigeracion') {
                // Compatibles con procesadores y chasis
                compatibles = productos.filter(other => {
                    return ['procesadores', 'chasis'].includes(other.categoria);
                });
            } else if (p.categoria === 'chasis') {
                // Compatibles con fuentes, tarjetas de video, almacenamiento
                compatibles = productos.filter(other => {
                    return ['fuentes', 'tarjetas-video', 'almacenamiento'].includes(other.categoria);
                });
            } else if (p.categoria === 'teclados-mouse') {
                // Compatibles con monitores
                compatibles = productos.filter(other => {
                    return other.categoria === 'monitores';
                });
            }
            compatibilidad[p.id] = compatibles.map(other => other.id);
        });

        buscador.addEventListener('input', function () {
            const valor = buscador.value.toLowerCase();
            let filtrados = productos.filter(p => p.nombre.toLowerCase().includes(valor));
            filtrados = filtrados.slice(0, 4); // Solo los primeros 4
            if (valor === '' || filtrados.length === 0) {
                dropdown.style.display = 'none';
                dropdown.innerHTML = '';
                listaCompatibilidad.innerHTML = '';
                return;
            }
            let html = '';
            filtrados.forEach(p => {
                html += `
                    <div class="item-producto" data-id="${p.id}" style="display:flex; align-items:center; gap:1rem; padding:0.8rem 1rem; border-bottom:1px solid #23283a; cursor:pointer; transition:background 0.2s;">
                        <span style="font-size:1.08rem; color:#A5BF45; font-weight:600;">${p.nombre}</span>
                    </div>
                `;
            });
            dropdown.innerHTML = html;
            dropdown.style.display = 'block';
            // Evento click para cada producto filtrado
            dropdown.querySelectorAll('.item-producto').forEach(el => {
                el.addEventListener('click', function (e) {
                    const id = this.getAttribute('data-id');
                    mostrarCompatibles(id);
                    dropdown.style.display = 'none';
                    buscador.value = this.querySelector('span').textContent;
                    e.stopPropagation();
                });
            });
        });

        // Ocultar dropdown si se hace click fuera
        document.addEventListener('click', function (e) {
            if (!buscador.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        function mostrarCompatibles(id) {
            const compatibles = compatibilidad[id] || [];
            if (compatibles.length === 0) {
                listaCompatibilidad.innerHTML = '<div style="padding:1rem;">No hay productos compatibles.</div>';
                return;
            }
            let html = '<div style="padding:1rem;">Compatibles:<ul style="margin-top:0.7rem;">';
            compatibles.forEach(cid => {
                const prod = productos.find(p => p.id === cid);
                if (prod) html += `<li style="margin-bottom:0.5rem;">${prod.nombre}</li>`;
            });
            html += '</ul></div>';
            listaCompatibilidad.innerHTML = html;
        }
    }
    // --- Compatibilidad de componentes (más completo y modo oscuro) ---
    const cpuSelect = document.getElementById('cpu');
    const motherboardSelect = document.getElementById('motherboard');
    const ramSelect = document.getElementById('ram');
    const gpuSelect = document.getElementById('gpu');
    const storageSelect = document.getElementById('storage');
    const psuSelect = document.getElementById('psu');
    const resultadoDiv = document.getElementById('resultadoCompatibilidad');

    // Opciones de compatibilidad
    const motherboards = {
        intel: [
            { value: 'b660', text: 'B660 (Intel 12th Gen)' },
            { value: 'z690', text: 'Z690 (Intel 12th Gen)' }
        ],
        amd: [
            { value: 'b550', text: 'B550 (AMD Ryzen)' },
            { value: 'x570', text: 'X570 (AMD Ryzen)' }
        ]
    };
    const rams = {
        b660: ['DDR4', 'DDR5'],
        z690: ['DDR4', 'DDR5'],
        b550: ['DDR4'],
        x570: ['DDR4']
    };
    const gpuCompat = {
        b660: ['nvidia', 'amd-gpu'],
        z690: ['nvidia', 'amd-gpu'],
        b550: ['nvidia', 'amd-gpu'],
        x570: ['nvidia', 'amd-gpu']
    };
    const storageCompat = {
        b660: ['ssd', 'hdd'],
        z690: ['ssd', 'hdd'],
        b550: ['ssd', 'hdd'],
        x570: ['ssd', 'hdd']
    };
    const psuCompat = {
        nvidia: ['650w', '550w'],
        'amd-gpu': ['650w', '550w']
    };

    cpuSelect && cpuSelect.addEventListener('change', function () {
        motherboardSelect.innerHTML = '<option value="">Selecciona una tarjeta madre</option>';
        ramSelect.innerHTML = '<option value="">Selecciona una memoria RAM</option>';
        gpuSelect.innerHTML = '<option value="">Selecciona una GPU</option>';
        storageSelect.innerHTML = '<option value="">Selecciona almacenamiento</option>';
        psuSelect.innerHTML = '<option value="">Selecciona una fuente</option>';
        resultadoDiv.innerHTML = '';
        if (motherboards[this.value]) {
            motherboards[this.value].forEach(mb => {
                const opt = document.createElement('option');
                opt.value = mb.value;
                opt.textContent = mb.text;
                motherboardSelect.appendChild(opt);
            });
        }
    });

    motherboardSelect && motherboardSelect.addEventListener('change', function () {
        ramSelect.innerHTML = '<option value="">Selecciona una memoria RAM</option>';
        gpuSelect.innerHTML = '<option value="">Selecciona una GPU</option>';
        storageSelect.innerHTML = '<option value="">Selecciona almacenamiento</option>';
        psuSelect.innerHTML = '<option value="">Selecciona una fuente</option>';
        resultadoDiv.innerHTML = '';
        if (rams[this.value]) {
            rams[this.value].forEach(ram => {
                const opt = document.createElement('option');
                opt.value = ram;
                opt.textContent = ram;
                ramSelect.appendChild(opt);
            });
        }
        if (gpuCompat[this.value]) {
            ['nvidia', 'amd-gpu'].forEach(gpu => {
                const opt = document.createElement('option');
                opt.value = gpu;
                opt.textContent = gpu === 'nvidia' ? 'NVIDIA RTX 3060' : 'AMD Radeon RX 6600';
                gpuSelect.appendChild(opt);
            });
        }
        if (storageCompat[this.value]) {
            ['ssd', 'hdd'].forEach(st => {
                const opt = document.createElement('option');
                opt.value = st;
                opt.textContent = st === 'ssd' ? 'SSD NVMe' : 'HDD 1TB';
                storageSelect.appendChild(opt);
            });
        }
    });

    gpuSelect && gpuSelect.addEventListener('change', function () {
        psuSelect.innerHTML = '<option value="">Selecciona una fuente</option>';
        if (psuCompat[this.value]) {
            psuCompat[this.value].forEach(psu => {
                const opt = document.createElement('option');
                opt.value = psu;
                opt.textContent = psu === '650w' ? '650W Certificada' : '550W Certificada';
                psuSelect.appendChild(opt);
            });
        }
    });

    document.getElementById('verCompatibilidad')?.addEventListener('click', function () {
        const cpu = cpuSelect.value;
        const mb = motherboardSelect.value;
        const ram = ramSelect.value;
        const gpu = gpuSelect.value;
        const storage = storageSelect.value;
        const psu = psuSelect.value;
        if (!cpu || !mb || !ram || !gpu || !storage || !psu) {
            resultadoDiv.innerHTML = '<div style="background:#23283a; color:#A5BF45; border-radius:1rem; padding:1.5rem; text-align:center; font-size:1.1rem; margin-bottom:1rem;">Por favor selecciona todos los componentes.</div>';
            return;
        }
        // Lógica de compatibilidad
        let compatible = false;
        if ((cpu === 'intel' && (mb === 'b660' || mb === 'z690')) || (cpu === 'amd' && (mb === 'b550' || mb === 'x570'))) {
            if (rams[mb].includes(ram) && gpuCompat[mb].includes(gpu) && storageCompat[mb].includes(storage) && psuCompat[gpu].includes(psu)) {
                compatible = true;
            }
        }
        if (compatible) {
            resultadoDiv.innerHTML = `<div style="background:#23283a; color:#A5BF45; border-radius:1rem; padding:2rem; text-align:center; font-size:1.2rem; box-shadow:0 2px 12px rgba(34,40,49,0.18);"><i class='fa-solid fa-circle-check' style='color:#A5BF45; font-size:2rem;'></i><br>¡Compatibilidad confirmada!<br>Tu selección es adecuada para armar tu PC.</div>`;
        } else {
            resultadoDiv.innerHTML = `<div style="background:#23283a; color:#ff4444; border-radius:1rem; padding:2rem; text-align:center; font-size:1.2rem; box-shadow:0 2px 12px rgba(34,40,49,0.18);"><i class='fa-solid fa-circle-xmark' style='color:#ff4444; font-size:2rem;'></i><br>Los componentes seleccionados no son compatibles.<br>Revisa las opciones sugeridas o consulta con nuestro equipo.</div>`;
        }
    });
    
    // Obtener productos de localStorage (sin modificar)
    const productosLocal = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Obtener productos del backend (solo agregar, no reemplazar)
    const productosBackend = await obtenerProductosBackendParaIndex();
    
    // Combinar productos: localStorage + backend
    const todosLosProductos = [...productosLocal, ...productosBackend];
    console.log(`📦 Total productos combinados: ${productosLocal.length} local + ${productosBackend.length} backend = ${todosLosProductos.length}`);

    // Renderizar productos destacados (primeros 6)
    const productsContainer = document.getElementById("products-container");
    if (productsContainer) {
        productsContainer.innerHTML = "";
        const primeros6 = todosLosProductos.slice(0, 6);
        primeros6.forEach(producto => renderProductCard(producto, productsContainer));
    }

    // Renderizar productos bajo 1 millón
    const productsUnderMillion = document.getElementById("products-under-million");
    if (productsUnderMillion) {
        productsUnderMillion.innerHTML = "";
        const productosBaratos = todosLosProductos // ← USAR PRODUCTOS COMBINADOS
            .filter(producto => producto.precio < 1000000)
            .slice(0, 3);
        productosBaratos.forEach(producto => renderProductCard(producto, productsUnderMillion));
    }

    // Agregar event listeners para los botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation(); // <--- Esto evita que el clic llegue al <a>
            e.preventDefault(); // <--- Evita que el <a> haga navegación por accidente
            const productId = this.getAttribute('data-id');
            const producto = productos.find(p => p.id == productId);
            const user = JSON.parse(localStorage.getItem('usuario'));
            if (user) {
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
                    updateCartCount();
                }
            } else {
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
                                    <button class="btn-ver-carrito" style="background:#235884;color:#fff;" onclick="window.location.href='/Nucleo-Tech---Fronted/HTML/login.html'">Iniciar sesión</button>
                                    <button class="btn-ver-carrito" style="background:#9bc53d;color:#222;" onclick="window.location.href='/Nucleo-Tech---Fronted/HTML/create-account.html'">Crear cuenta</button>
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
                }, 6000);
            }
        });
    });
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


