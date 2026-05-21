document.addEventListener("DOMContentLoaded", function() {
    
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const panelDesplegable = document.getElementById("menu-desplegable");

    // Condicional de seguridad: Solo se ejecuta si JS encuentra ambos elementos en el HTML
    if (btnHamburguesa && panelDesplegable) {
        
        btnHamburguesa.addEventListener("click", function(evento) {
            // Evita comportamientos por defecto del botón
            evento.preventDefault(); 
            
            // Alternamos la clase que mueve el menú
            panelDesplegable.classList.toggle("activo");

            const estaAbierto = panelDesplegable.classList.contains("activo");

            // Imprimimos en la consola para saber que el código funciona (puedes borrarlo para la entrega)
            console.log("¡Clic detectado! El menú está abierto:", estaAbierto);

            // Actualizamos la accesibilidad
            btnHamburguesa.setAttribute("aria-expanded", estaAbierto);
            panelDesplegable.setAttribute("aria-hidden", !estaAbierto);
        });

    } else {
        console.error("Fallo crítico: No se encontró el botón o el panel en el HTML.");
    }
});