// ===============================
// MENÚ HAMBURGUESA RESPONSIVE
// ===============================

// Selecciona el botón hamburguesa
const botonMenu = document.getElementById("menu-toggle");

// Selecciona el contenedor del menú
const menuNavegacion = document.getElementById("navbar-menu");

/**
 * Función que abre o cierra el menú de navegación.
 * También actualiza atributos ARIA para accesibilidad.
 */
function alternarMenu() {

    // Alterna la clase active
    menuNavegacion.classList.toggle("active");

    // Verifica si el menú está abierto
    const menuAbierto = menuNavegacion.classList.contains("active");

    // Actualiza aria-expanded
    botonMenu.setAttribute("aria-expanded", menuAbierto);

    // Gestión de foco para accesibilidad
    if (menuAbierto) {

        // Enfoca el primer enlace del menú
        const primerEnlace = menuNavegacion.querySelector("a");

        if (primerEnlace) {
            primerEnlace.focus();
        }
    } else {

        // Devuelve el foco al botón hamburguesa
        botonMenu.focus();
    }
}
// Evento click del botón hamburguesa
botonMenu.addEventListener("click", alternarMenu);