if (!localStorage.getItem('productos')) {
    const productosBase = [
        {
            id: 1,
            categoria: "procesadores",
            nombre: "Procesador Intel Core i7 12700K",
            marca: "Intel",
            precio: 1500000,
            stock: 12,
            descripcion: "12 núcleos, 20 hilos, frecuencia base 3.6GHz, ideal para gaming y multitarea.",
            imagen: "../IMG/Procesador Intel Core i7 12700K.webp",
            especificaciones: {
                socket: "LGA1700",
                TDP: "125W",
                graficaIntegrada: "Intel UHD Graphics 770"
            }
        },
        {
            id: 2,
            categoria: "monitores",
            nombre: "Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS",
            marca: "MSI",
            precio: 4997000,
            stock: 8,
            descripcion: "Panel QD-OLED de 3.ª Generación: calidad de imagen impresionante y tiempo de respuesta ultra rápido.",
            imagen: "IMG/Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS.webp",
            especificaciones: {
                resolucion: "4K",
                tasaRefresco: "165Hz",
                tiempoRespuesta: "0.03ms"
            }
        },
        {
            id: 3,
            nombre: "Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB",
            categoria: "tarjetas-video",
            marca: "ASRock",
            precio: 3700000,
            stock: 5,
            imagen: "IMG/Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB.webp",
            descripcion: "La ASRock AMD Radeon RX 9070 XT Steel Legend Dark es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, diseñada para gamers y creadores de contenido.",
            especificaciones: {
                arquitectura: "RDNA 3",
                rayTracing: "Sí",
                memoria: "16GB GDDR6"
            }
        },
        {
            id: 4,
            nombre: "Chasis Aerocool Ore Saturn FRGB Vidrio Templado",
            categoria: "chasis",
            marca: "Aerocool",
            precio: 2007002,
            stock: 10,
            imagen: "IMG/Chasis Aerocool Ore Saturn FRGB Vidrio Templado.jpg",
            descripcion: "Chasis Aerocool Ore Saturn FRGB con vidrio templado y diseño elegante.",
            especificaciones: {
                tipo: "ATX",
                material: "Acero y vidrio templado",
                ventiladores: "3x ARGB incluidos"
            }
        },
        {
            id: 5,
            nombre: "Fuente de Poder 80 Plus Gold 750W Modular",
            categoria: "fuentes",
            marca: "Corsair",
            precio: 405600,
            stock: 15,
            imagen: "IMG/Fuente de Poder 80 Plus Gold 750W Modular.jpg",
            descripcion: "Fuente de Poder 80 Plus Gold 750W Modular, eficiente y silenciosa.",
            especificaciones: {
                potencia: "750W",
                certificacion: "80 Plus Gold",
                modular: "Sí"
            }
        },
        {
            id: 6,
            nombre: "Fuente de Alimentación 850W 80 Plus Bronze",
            categoria: "fuentes",
            marca: "Corsair",
            precio: 305000,
            stock: 10,
            imagen: "IMG/Fuente de Alimentación 850W 80 Plus Bronze.webp",
            descripcion: "Fuente de Alimentación 850W 80 Plus Bronze, eficiente y silenciosa.",
            especificaciones: {
                potencia: "850W",
                certificacion: "80 Plus Bronze",
                modular: "Sí"
            }
        },
        {
            id: 7,
            nombre: "Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6",
            categoria: "tarjetas-video",
            marca: "NVIDIA",
            precio: 2200000,
            stock: 3,
            imagen: "IMG/Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6.jpg",
            descripcion: "La NVIDIA RTX 4070 es una tarjeta gráfica de alto rendimiento con 12GB de memoria GDDR6, ideal para gaming y creación de contenido.",
            especificaciones: {
                arquitectura: "Ada Lovelace",
                rayTracing: "Sí",
                memoria: "12GB GDDR6"
            }
        },
        {
            id: 8,
            nombre: "Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB",
            categoria: "tarjetas-video",
            marca: "AMD",
            precio: 3100000,
            stock: 3,
            imagen: "IMG/Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB.jpg",
            descripcion: "La AMD Radeon RX 7800 XT es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, ideal para gaming y creación de contenido.",
            especificaciones: {
                arquitectura: "RDNA 3",
                rayTracing: "Sí",
                memoria: "16GB GDDR6"
            }
        },
        {
            id: 9,
            nombre: "Teclado Mecánico Gamer RGB Switch Blue",
            categoria: "teclados-mouse",
            marca: "Logitech",
            precio: 370000,
            stock: 20,
            imagen: "IMG/Teclado Mecánico Gamer RGB Switch Blue.jpg",
            descripcion: "Teclado Mecánico Gamer RGB Switch Blue, ideal para gamers.",
            especificaciones: {
                tipo: "Mecánico",
                retroiluminación: "RGB",
                switch: "Blue"
            }
        },
        {
            id: 10,
            nombre: "Mouse Inalámbrico Gamer 16000DPI RGB",
            categoria: "teclados-mouse",
            marca: "Logitech",
            precio: 245000,
            stock: 15,
            imagen: "IMG/Mouse Inalámbrico Gamer 16000DPI RGB.jpg",
            descripcion: "Mouse Inalámbrico Gamer 16000DPI RGB, preciso y ergonómico.",
            especificaciones: {
                dpi: "16000",
                retroiluminación: "RGB",
                tipo: "Inalámbrico"
            }
        },
        {
            id: 11,
            nombre: "Monitor Gaming 27\" 144Hz 1ms FreeSync",
            categoria: "monitores",
            marca: "Acer",
            precio: 1250000,
            stock: 5,
            imagen: "IMG/Monitor Gaming 27 144Hz 1ms FreeSync.jpg",
            descripcion: "Monitor Gaming 27\" 144Hz 1ms FreeSync, ideal para gamers.",
            especificaciones: {
                tamaño: "27\"",
                frecuencia: "144Hz",
                tiempoRespuesta: "1ms",
                tecnologia: "FreeSync"
            }
        },
        {
            id: 12,
            nombre: "Monitor Curvo 32\" 165Hz QHD",
            categoria: "monitores",
            marca: "Acer",
            precio: 1460000,
            stock: 3,
            imagen: "IMG/Monitor Curvo 32 165Hz QHD.jpg",
            descripcion: "Monitor Curvo 32\" 165Hz QHD, ideal para gamers.",
            especificaciones: {
                tamaño: "32\"",
                frecuencia: "165Hz",
                resolucion: "QHD",
                tecnologia: "Curvo"
            }
        },
        {
            id: 13,
            nombre: "Sistema de Refrigeración Líquida CPU 240mm RGB",
            categoria: "refrigeracion",
            marca: "Corsair",
            precio: 875000,
            stock: 10,
            imagen: "IMG/Sistema de Refrigeración Líquida CPU 240mm RGB.jpg",
            descripcion: "Sistema de Refrigeración Líquida CPU 240mm RGB, eficiente y silencioso.",
            especificaciones: {
                tipo: "Refrigeración Líquida",
                tamaño: "240mm",
                rgb: "Sí"
            }
        },
        {
            id: 14,
            nombre: "Ventiladores RGB 120mm Pack de 3",
            categoria: "refrigeracion",
            marca: "Corsair",
            precio: 135000,
            stock: 20,
            imagen: "IMG/PCCOOLER Ventilador de carcasa RGB de 4.724 in con rodamiento hidráulico, paquete de 3 unidades Magic Moon, PC-FX120.jpg",
            descripcion: "Ventiladores RGB 120mm Pack de 3, ideales para mejorar la refrigeración de tu PC.",
            especificaciones: {
                tipo: "Ventilador",
                tamaño: "120mm",
                rgb: "Sí"
            }
        }
    ];
    localStorage.setItem('productos', JSON.stringify(productosBase));
}