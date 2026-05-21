// Archivo: Script_BB.js
// Desarrollador: Benjamín Barraza
// Funcionalidades: Menú hamburguesa accesible y Carrito de Reservas dinámico

document.addEventListener("DOMContentLoaded", function() {
    
    // =====================================================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA
    // =====================================================================
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const panelDesplegable = document.getElementById("menu-desplegable");

    if (btnHamburguesa && panelDesplegable) {
        btnHamburguesa.addEventListener("click", function(evento) {
            evento.preventDefault(); 
            
            // Muestra u oculta el panel
            panelDesplegable.classList.toggle("activo");

            // Accesibilidad ARIA (Rúbrica)
            const estaAbierto = panelDesplegable.classList.contains("activo");
            btnHamburguesa.setAttribute("aria-expanded", estaAbierto);
            panelDesplegable.setAttribute("aria-hidden", !estaAbierto);
        });
    } else {
        console.error("Error: Elementos del menú no encontrados en el DOM.");
    }

    // =====================================================================
    // 2. LÓGICA DE SERVICIOS DINÁMICOS (Carrito de Reservas)
    // =====================================================================
    
    let reservasUsuario = []; // Arreglo de objetos (Rúbrica)
    
    const contenedorLista = document.getElementById("lista-reservas");
    const contadorTotal = document.getElementById("total-reservas");

    // Función para dibujar el carrito en pantalla
    function actualizarInterfaz() {
        if (!contenedorLista) return;
        contenedorLista.innerHTML = ""; // Limpiamos para redibujar

        if (reservasUsuario.length === 0) {
            contenedorLista.innerHTML = `<li class="list-group-item text-muted text-center bg-dark border-secondary">No has seleccionado ningún servicio aún.</li>`;
            contadorTotal.textContent = "0";
            return;
        }

        // Recorremos el arreglo y creamos los elementos HTML
        reservasUsuario.forEach(function(servicio, indice) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-secondary mb-2";
            
            li.innerHTML = `
                <div>
                    <strong>${servicio.nombre}</strong> <small class="text-muted ms-2">(${servicio.fecha})</small>
                </div>
                <button class="btn btn-danger btn-sm btn-eliminar" data-indice="${indice}">Quitar</button>
            `;
            
            contenedorLista.appendChild(li);
        });

        contadorTotal.textContent = reservasUsuario.length;
    }

    // Delegación de eventos Global: Inmune a la carga dinámica de otras compañeras
    document.addEventListener("click", function(evento) {
        
        // A) Lógica para AÑADIR (Detectar clics en cualquier botón de reservar, presente o futuro)
        const botonReservar = evento.target.closest(".btn-reservar");
        if (botonReservar) {
            evento.preventDefault();
            
            const nombreServicio = botonReservar.getAttribute("data-servicio") || "Servicio Seleccionado";
            const servicioObjeto = {
                nombre: nombreServicio,
                fecha: new Date().toLocaleDateString()
            };

            reservasUsuario.push(servicioObjeto);
            actualizarInterfaz();
        }

        // B) Lógica para QUITAR (Detectar clics en los botones de eliminar del carrito)
        if (evento.target.classList.contains("btn-eliminar")) {
            const posicion = evento.target.getAttribute("data-indice");
            reservasUsuario.splice(posicion, 1); // Borramos del arreglo
            actualizarInterfaz(); // Redibujamos la pantalla
        }
    });

});