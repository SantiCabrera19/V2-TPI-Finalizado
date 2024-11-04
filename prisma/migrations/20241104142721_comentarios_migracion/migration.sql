-- CreateTable
CREATE TABLE `cita` (
    `cita_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NULL,
    `servicio_id` INTEGER NULL,
    `fecha` DATE NOT NULL,
    `hora` TIME(0) NOT NULL,
    `estado` VARCHAR(50) NULL DEFAULT 'Pendiente',
    `notas` TEXT NULL,

    INDEX `cliente_id`(`cliente_id`),
    INDEX `idx_cita_fecha`(`fecha`),
    INDEX `servicio_id`(`servicio_id`),
    PRIMARY KEY (`cita_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(15) NULL,
    `direccion` VARCHAR(255) NULL,
    `fecha_registro` TIMESTAMP(0) NULL DEFAULT (now()),
    `contrasena` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentario` (
    `comentario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NULL,
    `nombre` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `contenido` TEXT NOT NULL,
    `fecha` TIMESTAMP(0) NULL DEFAULT (now()),
    `visible` BOOLEAN NULL DEFAULT true,

    INDEX `cliente_id`(`cliente_id`),
    PRIMARY KEY (`comentario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consulta` (
    `consulta_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `mensaje` TEXT NOT NULL,
    `fecha` TIMESTAMP(0) NULL DEFAULT (now()),
    `respondida` BOOLEAN NULL DEFAULT false,
    `respuesta` TEXT NULL,

    INDEX `cliente_id`(`cliente_id`),
    INDEX `idx_consulta_fecha`(`fecha`),
    PRIMARY KEY (`consulta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeria` (
    `imagen_id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`imagen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `noticia` (
    `noticia_id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `contenido` TEXT NULL,
    `fecha_publicacion` TIMESTAMP(0) NULL DEFAULT (now()),

    PRIMARY KEY (`noticia_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal` (
    `personal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `rol` VARCHAR(50) NULL,
    `email` VARCHAR(100) NOT NULL,
    `contrasena` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`personal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `redsocial` (
    `redsocial_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`redsocial_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio` (
    `servicio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `precio` DECIMAL(10, 2) NULL,
    `duracion` INTEGER NULL,

    PRIMARY KEY (`servicio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ubicacion` (
    `ubicacion_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `latitud` DECIMAL(10, 8) NULL,
    `longitud` DECIMAL(11, 8) NULL,

    PRIMARY KEY (`ubicacion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ubicacion_redsocial` (
    `ubicacion_id` INTEGER NOT NULL,
    `redsocial_id` INTEGER NOT NULL,

    INDEX `redsocial_id`(`redsocial_id`),
    PRIMARY KEY (`ubicacion_id`, `redsocial_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `cita_ibfk_2` FOREIGN KEY (`servicio_id`) REFERENCES `servicio`(`servicio_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comentario` ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `consulta` ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ubicacion_redsocial` ADD CONSTRAINT `ubicacion_redsocial_ibfk_1` FOREIGN KEY (`ubicacion_id`) REFERENCES `ubicacion`(`ubicacion_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ubicacion_redsocial` ADD CONSTRAINT `ubicacion_redsocial_ibfk_2` FOREIGN KEY (`redsocial_id`) REFERENCES `redsocial`(`redsocial_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
