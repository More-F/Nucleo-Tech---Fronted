-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-09-2025 a las 18:11:33
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nucleo_tech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `fecha`, `id_usuario`) VALUES
(1, '2025-09-01', 1),
(2, '2025-09-02', 2),
(3, '2025-09-03', 3),
(4, '2025-09-03', 4),
(5, '2025-09-04', 5),
(6, '2025-09-05', 2),
(7, '2025-09-06', 1),
(8, '2025-09-07', 4),
(9, '2025-09-08', 3),
(10, '2025-09-09', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`) VALUES
(1, 'procesadores'),
(2, 'monitores'),
(3, 'tarjetas-video'),
(4, 'chasis'),
(5, 'fuentes'),
(6, 'teclados-mouse'),
(7, 'refrigeracion'),
(8, 'ram'),
(9, 'almacenamiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_carrito`
--

DROP TABLE IF EXISTS `detalle_carrito`;
CREATE TABLE IF NOT EXISTS `detalle_carrito` (
  `id_detalle_carrito` int NOT NULL AUTO_INCREMENT,
  `total_precio` decimal(12,2) DEFAULT NULL,
  `total_producto` int DEFAULT NULL,
  `id_carrito` int DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  PRIMARY KEY (`id_detalle_carrito`),
  KEY `id_carrito` (`id_carrito`),
  KEY `id_producto` (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_carrito`
--

INSERT INTO `detalle_carrito` (`id_detalle_carrito`, `total_precio`, `total_producto`, `id_carrito`, `id_producto`) VALUES
(1, 3000000.00, 2, 1, 1),
(2, 4997000.00, 1, 2, 2),
(3, 3700000.00, 1, 3, 3),
(4, 2007002.00, 1, 4, 4),
(5, 405600.00, 1, 5, 5),
(6, 610000.00, 2, 6, 6),
(7, 2200000.00, 1, 7, 7),
(8, 6200000.00, 2, 8, 8),
(9, 740000.00, 2, 9, 9),
(10, 245000.00, 1, 10, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

DROP TABLE IF EXISTS `marca`;
CREATE TABLE IF NOT EXISTS `marca` (
  `id_marca` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id_marca`, `nombre`) VALUES
(1, 'Intel'),
(2, 'MSI'),
(3, 'ASRock'),
(4, 'Aerocool'),
(5, 'Corsair'),
(6, 'NVIDIA'),
(7, 'AMD'),
(8, 'Acer'),
(9, 'ASUS'),
(10, 'Gigabyte'),
(11, 'NZXT'),
(12, 'Cooler Master'),
(13, 'EVGA'),
(14, 'Thermaltake'),
(15, 'Razer'),
(16, 'Samsung'),
(17, 'LG'),
(18, 'Noctua'),
(19, 'Logitech');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(12,2) NOT NULL,
  `stock` int DEFAULT '0',
  `descripcion` text COLLATE utf8mb4_general_ci,
  `especificaciones` text COLLATE utf8mb4_general_ci,
  `imagen` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_marca` int DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_marca` (`id_marca`),
  KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `precio`, `stock`, `descripcion`, `especificaciones`, `imagen`, `id_marca`, `id_categoria`) VALUES
(1, 'Procesador Intel Core i7 12700K', 1500000.00, 12, '12 núcleos, 20 hilos, frecuencia base 3.6GHz, ideal para gaming y multitarea.', 'Socket: LGA1700, TDP: 125W, Gráfica integrada: Intel UHD Graphics 770', 'IMG/Procesador Intel Core i7 12700K.webp', 1, 1),
(2, 'Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS', 4997000.00, 8, 'Panel QD-OLED de 3.ª Generación: calidad de imagen impresionante y tiempo de respuesta ultra rápido.', 'Resolución: 4K, Tasa de refresco: 165Hz, Tiempo de respuesta: 0.03ms', 'IMG/Monitor MSI GAMING 32″ 321CUP QD-OLED 4K, 165HZ, 0.03MS.webp', 2, 2),
(3, 'Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB', 3700000.00, 5, 'La ASRock AMD Radeon RX 9070 XT Steel Legend Dark es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, diseñada para gamers y creadores de contenido.', 'Arquitectura: RDNA 3, RayTracing: Sí, Memoria: 16GB GDDR6', 'IMG/Tarjeta ASRock AMD Radeon RX 9070 XT Steel Legend Dark 16GB.webp', 3, 3),
(4, 'Chasis Aerocool Ore Saturn FRGB Vidrio Templado', 2007002.00, 10, 'Chasis Aerocool Ore Saturn FRGB con vidrio templado y diseño elegante.', 'Tipo: ATX, Material: Acero y vidrio templado, Ventiladores: 3x ARGB incluidos', 'IMG/Chasis Aerocool Ore Saturn FRGB Vidrio Templado.jpg', 4, 4),
(5, 'Fuente de Poder 80 Plus Gold 750W Modular', 405600.00, 15, 'Fuente de Poder 80 Plus Gold 750W Modular, eficiente y silenciosa.', 'Potencia: 750W, Certificación: 80 Plus Gold, Modular: Sí', 'IMG/Fuente de Poder 80 Plus Gold 750W Modular.jpg', 5, 5),
(6, 'Fuente de Alimentación 850W 80 Plus Bronze', 305000.00, 10, 'Fuente de Alimentación 850W 80 Plus Bronze, eficiente y silenciosa.', 'Potencia: 850W, Certificación: 80 Plus Bronze, Modular: Sí', 'IMG/Fuente de Alimentación 850W 80 Plus Bronze.webp', 5, 5),
(7, 'Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6', 2200000.00, 3, 'La NVIDIA RTX 4070 es una tarjeta gráfica de alto rendimiento con 12GB de memoria GDDR6, ideal para gaming y creación de contenido.', 'Arquitectura: Ada Lovelace, RayTracing: Sí, Memoria: 12GB GDDR6', 'IMG/Tarjeta de Video NVIDIA RTX 4070 12GB GDDR6.jpg', 6, 3),
(8, 'Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB', 3100000.00, 3, 'La AMD Radeon RX 7800 XT es una tarjeta gráfica de alto rendimiento con 16GB de memoria GDDR6, ideal para gaming y creación de contenido.', 'Arquitectura: RDNA 3, RayTracing: Sí, Memoria: 16GB GDDR6', 'IMG/Tarjeta Gráfica AMD Radeon RX 7800 XT 16GB.jpg', 7, 3),
(9, 'Teclado Mecánico Gamer RGB Switch Blue', 370000.00, 20, 'Teclado Mecánico Gamer RGB Switch Blue, ideal para gamers.', 'Tipo: Mecánico, Retroiluminación: RGB, Switch: Blue', 'IMG/Teclado Mecánico Gamer RGB Switch Blue.jpg', 19, 6),
(10, 'Mouse Inalámbrico Gamer 16000DPI RGB', 245000.00, 15, 'Mouse Inalámbrico Gamer 16000DPI RGB, preciso y ergonómico.', 'DPI: 16000, Retroiluminación: RGB, Tipo: Inalámbrico', 'IMG/Mouse Inalámbrico Gamer 16000DPI RGB.jpg', 19, 6),
(11, 'Monitor Gaming 27\" 144Hz 1ms FreeSync', 1250000.00, 5, 'Monitor Gaming 27\" 144Hz 1ms FreeSync, ideal para gamers.', 'Tamaño: 27\", Frecuencia: 144Hz, Tiempo de respuesta: 1ms, Tecnología: FreeSync', 'IMG/Monitor Gaming 27 144Hz 1ms FreeSync.jpg', 8, 2),
(12, 'Monitor Curvo 32\" 165Hz QHD', 1460000.00, 3, 'Monitor Curvo 32\" 165Hz QHD, ideal para gamers.', 'Tamaño: 32\", Frecuencia: 165Hz, Resolución: QHD, Tecnología: Curvo', 'IMG/Monitor Curvo 32 165Hz QHD.jpg', 8, 2),
(13, 'Sistema de Refrigeración Líquida CPU 240mm RGB', 875000.00, 10, 'Sistema de Refrigeración Líquida CPU 240mm RGB, eficiente y silencioso.', 'Tipo: Refrigeración Líquida, Tamaño: 240mm, RGB: Sí', 'IMG/Sistema de Refrigeración Líquida CPU 240mm RGB.jpg', 5, 7),
(14, 'Ventiladores RGB 120mm Pack de 3', 135000.00, 20, 'Ventiladores RGB 120mm Pack de 3, ideales para mejorar la refrigeración de tu PC.', 'Tipo: Ventilador, Tamaño: 120mm, RGB: Sí', 'IMG/PCCOOLER Ventilador de carcasa RGB de 4.724 in con rodamiento hidráulico, paquete de 3 unidades Magic Moon, PC-FX120.jpg', 5, 7),
(15, 'Procesador AMD Ryzen 9 7900X', 2300000.00, 7, '12 núcleos, 24 hilos, frecuencia base 4.7GHz, excelente para gaming y productividad.', 'Socket: AM5, TDP: 170W, Gráfica integrada: Radeon Graphics', 'IMG/Procesador AMD Ryzen 9 7900X.jpg', 7, 1),
(16, 'Procesador Intel Core i5 13600KF', 1250000.00, 9, '14 núcleos, 20 hilos, gran relación precio-rendimiento.', 'Socket: LGA1700, TDP: 125W, Gráfica integrada: No', 'IMG/Procesador Intel Core i5 13600KF.jpg', 1, 1),
(17, 'Tarjeta de Video ASUS GeForce RTX 4080 16GB', 5200000.00, 4, 'GPU de última generación con soporte para Ray Tracing y DLSS 3.', 'Arquitectura: Ada Lovelace, RayTracing: Sí, Memoria: 16GB GDDR6X', 'IMG/Tarjeta de Video ASUS GeForce RTX 4080 16GB.jpg', 9, 3),
(18, 'Tarjeta de Video Gigabyte GeForce RTX 4060 Ti 8GB', 1750000.00, 6, 'Excelente para 1080p y 1440p gaming con 8GB GDDR6.', 'Arquitectura: Ada Lovelace, RayTracing: Sí, Memoria: 8GB GDDR6', 'IMG/Tarjeta de Video Gigabyte GeForce RTX 4060 Ti 8GB.jpg', 10, 3),
(19, 'Chasis NZXT H510 Blanco Vidrio Templado', 520000.00, 12, 'Diseño minimalista con excelente gestión de cables.', 'Tipo: ATX Mid Tower, Material: Acero y vidrio templado, Ventiladores: 2 incluidos', 'IMG/Chasis NZXT H510 Blanco Vidrio Templado.jpg', 11, 4),
(20, 'Chasis Cooler Master MasterBox TD500 Mesh', 680000.00, 8, 'Flujo de aire optimizado y diseño futurista.', 'Tipo: ATX, Material: Acero y vidrio templado, Ventiladores: 3 ARGB incluidos', 'IMG/Chasis Cooler Master MasterBox TD500 Mes.jpg', 12, 4),
(21, 'Fuente EVGA 1000W 80 Plus Platinum', 780000.00, 5, 'Fuente modular de 1000W con certificación Platinum.', 'Potencia: 1000W, Certificación: 80 Plus Platinum, Modular: Sí', 'IMG/Fuente EVGA 1000W 80 Plus Platinum.jpg', 13, 5),
(22, 'Fuente Thermaltake Toughpower GF1 850W Gold', 560000.00, 6, 'Fuente modular de 850W con certificación Gold.', 'Potencia: 850W, Certificación: 80 Plus Gold, Modular: Sí', 'IMG/Fuente Thermaltake Toughpower GF1 850W Gold.jpg', 14, 5),
(23, 'Teclado Mecánico Razer BlackWidow V3 RGB', 480000.00, 10, 'Teclado mecánico con switches verdes y RGB.', 'Tipo: Mecánico, Retroiluminación: RGB, Switch: Razer Green', 'IMG/Teclado Mecánico Razer BlackWidow V3 RGB.jpg', 15, 6),
(24, 'Mouse Razer DeathAdder V2 Pro Wireless', 420000.00, 8, 'Mouse inalámbrico con sensor de alta precisión.', 'DPI: 20000, Retroiluminación: RGB, Tipo: Inalámbrico', 'IMG/Mouse Razer DeathAdder V2 Pro Wireless.jpg', 15, 6),
(25, 'Monitor Samsung Odyssey G7 27\" QHD 240Hz', 2200000.00, 5, 'Monitor curvo QHD con frecuencia de actualización de 240Hz.', 'Tamaño: 27\", Frecuencia: 240Hz, Resolución: QHD, Tecnología: Curvo', 'IMG/Monitor Samsung Odyssey G7 27 QHD 240Hz.jpg', 16, 2),
(26, 'Monitor LG UltraGear 34\" Curvo QHD 160Hz', 2900000.00, 4, 'Monitor ultra ancho ideal para multitarea y gaming.', 'Tamaño: 34\", Frecuencia: 160Hz, Resolución: QHD, Tecnología: Curvo UltraWide', 'IMG/Monitor LG UltraGear 34 Curvo QHD 160Hz.jpg', 17, 2),
(27, 'Refrigeración Líquida NZXT Kraken Z63 280mm', 1150000.00, 6, 'Sistema AIO con pantalla LCD personalizable.', 'Tipo: Refrigeración Líquida, Tamaño: 280mm, RGB: Sí', 'IMG/Refrigeración Líquida NZXT Kraken Z63 280mm.jpg', 11, 7),
(28, 'Refrigeración por Aire Noctua NH-D15', 720000.00, 5, 'Disipador por aire de alto rendimiento con doble ventilador.', 'Tipo: Aire, Tamaño: 140mm, RGB: No', 'IMG/Refrigeración por Aire Noctua NH-D15.jpg', 18, 7),
(29, 'Kit Memoria RAM Corsair Vengeance 32GB (2x16) 6000MHz DDR5', 1050000.00, 12, 'Memoria DDR5 de alto rendimiento para gamers y creadores.', 'Capacidad: 32GB (2x16), Velocidad: 6000MHz, Tipo: DDR5', 'IMG/Kit Memoria RAM Corsair Vengeance 32GB (2x16) 6000MHz DDR5.jpg', 5, 8),
(30, 'SSD NVMe Samsung 980 Pro 2TB', 950000.00, 15, 'SSD NVMe de alto rendimiento con interfaz PCIe 4.0.', 'Capacidad: 2TB, Tipo: NVMe M.2, Velocidad lectura: 7000MB/s', 'IMG/SSD NVMe Samsung 980 Pro 2TB.jpg', 16, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `contraseña` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `id_rol` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `id_rol` (`id_rol`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `correo`, `contraseña`, `id_rol`) VALUES
(1, 'Andres', 'Lopez', 'andres@example.com', '1234', 1),
(2, 'Maria', 'Perez', 'maria@example.com', 'abcd', 2),
(3, 'Carlos', 'Ramirez', 'carlos@example.com', 'pass123', 2),
(4, 'Laura', 'Gomez', 'laura@example.com', 'qwerty', 2),
(5, 'Sofia', 'Martinez', 'sofia@example.com', 'admin123', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
