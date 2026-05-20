// Archivo: Script_BB.js
// Funcionalidad: Control de menú hamburguesa circular y actualización de atributos ARIA

document.addEventListener("DOMContentLoaded", function() {
    
    // VARIABLES UTILIZADAS:
    // btnHamburguesa: Guarda la referencia al botón circular '☰' mediante su ID único.
    // panelDesplegable: Guarda la referencia al contenedor que aloja la lista de categorías.
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const panelDesplegable = document.getElementById("menu-desplegable");

    // FUNCIÓN: Maneja la transición del menú y actualiza la accesibilidad web en tiempo real.
    function gestionarMenu() {
        // Alternamos la clase de CSS para mostrar u ocultar visualmente el panel lateral
        panelDesplegable.classList.toggle("activo");

        // Variable booleana que verifica si el menú contiene actualmente la clase activa
        const estaAbierto = panelDesplegable.classList.contains("activo");

        // CONDICIONAL DE ACCESIBILIDAD (ARIA):
        // Si el menú quedó abierto, actualizamos los estados para los lectores de pantalla.
        if (estaAbierto) {
            btnHamburguesa.setAttribute("aria-expanded", "true");  // Informa que el control está expandido
            panelDesplegable.setAttribute("aria-hidden", "false"); // Informa que el panel es visible
        } else {
            btnHamburguesa.setAttribute("aria-expanded", "false"); // Informa que el control está colapsado
            panelDesplegable.setAttribute("aria-hidden", "true");  // Oculta el panel del árbol de accesibilidad
        }
    }

    // ESCUCHADOR DE EVENTOS:
    // Asignamos de forma segura el evento 'click' al botón circular (evitando usar atributos inline en el HTML).
    if (btnHamburguesa && panelDesplegable) {
        btnHamburguesa.addEventListener("click", gestionarMenu);
    }
});