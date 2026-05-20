// Archivo: Script_BB.js
// Funcionalidad: Menú hamburguesa dinámico y gestión de atributos ARIA

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Seleccionamos los elementos del DOM que vamos a manipular
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const menuNavegacion = document.getElementById("navbarCollapse");

    // 2. Creamos la función que manejará la apertura y cierre
    function alternarMenu() {
        // Alternamos la clase 'show' que controla la visibilidad en CSS
        menuNavegacion.classList.toggle("show");

        // 3. Gestión de Accesibilidad (Atributos ARIA)
        // Verificamos si el menú tiene la clase 'show' en este preciso instante
        const menuEstaAbierto = menuNavegacion.classList.contains("show");

        // Actualizamos los atributos dependiendo del estado del menú
        if (menuEstaAbierto) {
            btnHamburguesa.setAttribute("aria-expanded", "true");
            menuNavegacion.setAttribute("aria-hidden", "false");
        } else {
            btnHamburguesa.setAttribute("aria-expanded", "false");
            menuNavegacion.setAttribute("aria-hidden", "true");
        }
    }

    // 4. Asignamos el evento de clic al botón (sin usar 'onclick' en el HTML)
    if (btnHamburguesa) {
        btnHamburguesa.addEventListener("click", alternarMenu);
    }
});