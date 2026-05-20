// ===============================
// MENÚ HAMBURGUESA
// ===============================

// Botón principal hamburguesa
const botonMenu =
document.getElementById("menu-toggle");

// Contenedor del menú
const menu =
document.getElementById("navbar-menu");

// Botón submenú servicios
const botonServicios =
document.getElementById("servicios-btn");

// Lista servicios
const submenuServicios =
document.getElementById("submenu-servicios");

// Botón submenú especialidades
const botonEspecialidades =
document.getElementById("especialidades-btn");

// Lista especialidades
const submenuEspecialidades =
document.getElementById("submenu-especialidades");

/**
 * Abre o cierra el menú hamburguesa.
 */
function alternarMenu() {

    menu.classList.toggle("active");

    const abierto =
    menu.classList.contains("active");

    botonMenu.setAttribute(
        "aria-expanded",
        abierto
    );
}

/**
 * Abre o cierra el submenú servicios.
 */
function alternarServicios() {

    submenuServicios.classList.toggle("show");

    const expandido =
    submenuServicios.classList.contains("show");

    botonServicios.setAttribute(
        "aria-expanded",
        expandido
    );
}

/**
 * Abre o cierra el submenú especialidades.
 */
function alternarEspecialidades() {

    submenuEspecialidades.classList.toggle("show");

    const expandido =
    submenuEspecialidades.classList.contains("show");

    botonEspecialidades.setAttribute(
        "aria-expanded",
        expandido
    );
}

// EVENTOS

botonMenu.addEventListener(
    "click",
    alternarMenu
);

botonServicios.addEventListener(
    "click",
    alternarServicios
);

botonEspecialidades.addEventListener(
    "click",
    alternarEspecialidades
);