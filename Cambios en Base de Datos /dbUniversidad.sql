-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 04-11-2015 a las 18:27:15
-- Versión del servidor: 5.5.43-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: ` mickalex_dbUniversidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Clase`
--

CREATE TABLE IF NOT EXISTS `Clase` (
  `IdClase` int(11) NOT NULL AUTO_INCREMENT,
  `IdCursoC` int(11) NOT NULL COMMENT 'Debe de existir un curso en tabla Curso',
  `IdProfesorC` int(11) NOT NULL COMMENT 'Debe existir un id de profesor ya previamente registrado en la tabla Profesor',
  `IdSalonC` int(11) NOT NULL COMMENT 'Debemos checar que el salon no este ocupado en el mismo horario ademas de que debe existir este salon en la tabla Salon',
  `IdHorario` int(11) NOT NULL COMMENT 'Creamos primero el horario en la tabla de Horario y depues agregamos en este sitio',
  PRIMARY KEY (`IdClase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Curso`
--

CREATE TABLE IF NOT EXISTS `Curso` (
  `IdCurso` int(11) NOT NULL AUTO_INCREMENT,
  `IdDeptoC` int(11) NOT NULL,
  `NombreC` varchar(50) COLLATE utf8_bin NOT NULL,
  `DescripcionC` varchar(150) COLLATE utf8_bin NOT NULL,
  `Creditos` int(11) NOT NULL,
  PRIMARY KEY (`IdCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Departamento`
--

CREATE TABLE IF NOT EXISTS `Departamento` (
  `IdDepto` int(11) NOT NULL AUTO_INCREMENT,
  `NombreD` varchar(150) COLLATE utf8_bin NOT NULL,
  `IdJefe` int(11) NOT NULL,
  PRIMARY KEY (`IdDepto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Edificio`
--

CREATE TABLE IF NOT EXISTS `Edificio` (
  `IdEdificio` int(11) NOT NULL AUTO_INCREMENT,
  `NombreE` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdEdificio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Email`
--

CREATE TABLE IF NOT EXISTS `Email` (
  `IdEmpleadoE` int(11) NOT NULL,
  `Correo` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Empleado`
--

CREATE TABLE IF NOT EXISTS `Empleado` (
  `IdEmpleado` int(11) NOT NULL AUTO_INCREMENT,
  `Nss` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Tipo` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdEmpleado`),
  KEY `IdEmpleado` (`IdEmpleado`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `Empleado`
--

INSERT INTO `Empleado` (`IdEmpleado`, `Nss`, `Nombre`, `Tipo`) VALUES
(3, 123454, 'Alexis', 'Profesor'),
(4, 123712, 'Alexis', 'Profesor'),
(5, 12312, 'Alexis1', 'Tipoa1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Estudiante`
--

CREATE TABLE IF NOT EXISTS `Estudiante` (
  `IdEstudiante` int(11) NOT NULL AUTO_INCREMENT,
  `NombreEs` varchar(150) COLLATE utf8_bin NOT NULL,
  `E-mail` varchar(150) COLLATE utf8_bin NOT NULL,
  `FechaNac` date NOT NULL,
  `FechaIngreso` date NOT NULL,
  `IdAsesor` int(11) NOT NULL COMMENT 'Id de profesor ya que el asesor se deriva de tabla de profesores',
  PRIMARY KEY (`IdEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Horario`
--

CREATE TABLE IF NOT EXISTS `Horario` (
  `IdHorario` int(11) NOT NULL AUTO_INCREMENT,
  `IdSalon` int(11) NOT NULL,
  `Dias` varchar(50) COLLATE utf8_bin NOT NULL COMMENT 'L-M-M-J-V-S',
  `HoraInicio` time NOT NULL,
  `HoraFin` time NOT NULL,
  PRIMARY KEY (`IdHorario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Inscripcion_Clase`
--

CREATE TABLE IF NOT EXISTS `Inscripcion_Clase` (
  `IdInscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `IdEstudianteI` int(11) NOT NULL,
  `IdClaseI` int(11) NOT NULL,
  `IdHorarioI` int(11) NOT NULL,
  `GradoEstudiante` int(11) NOT NULL,
  PRIMARY KEY (`IdInscripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Profesor`
--

CREATE TABLE IF NOT EXISTS `Profesor` (
  `IdProfesor` int(11) NOT NULL AUTO_INCREMENT,
  `IdEmpleadoP` int(11) NOT NULL,
  `Categoria` varchar(50) COLLATE utf8_bin NOT NULL,
  `Especialidad` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdProfesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Salon`
--

CREATE TABLE IF NOT EXISTS `Salon` (
  `IdSalon` int(11) NOT NULL AUTO_INCREMENT,
  `IdEdificio` int(11) NOT NULL,
  `Tipo` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdSalon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SuperUsuarios`
--

CREATE TABLE IF NOT EXISTS `SuperUsuarios` (
  `IdSuperUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(50) COLLATE utf8_bin NOT NULL,
  `Password` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdSuperUsuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `SuperUsuarios`
--

INSERT INTO `SuperUsuarios` (`IdSuperUsuario`, `Usuario`, `Password`) VALUES
(1, 'Administrador', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tipo_Empleado`
--

CREATE TABLE IF NOT EXISTS `Tipo_Empleado` (
  `IdTipo` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdTipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Trabaja_En`
--

CREATE TABLE IF NOT EXISTS `Trabaja_En` (
  `IdProfesorT` int(11) NOT NULL,
  `IdDeptoT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
