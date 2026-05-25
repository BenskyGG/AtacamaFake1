document.addEventListener("DOMContentLoaded", function() {
    
    // LÓGICA DEL MENÚ HAMBURGUESA 
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const panelDesplegable = document.getElementById("menu-desplegable");
    
    if (btnHamburguesa && panelDesplegable) {
        
        // A) Botón para abrir/cerrar el menú
        btnHamburguesa.addEventListener("click", function(evento) {
            evento.preventDefault(); 
            panelDesplegable.classList.toggle("activo");

            const estaAbierto = panelDesplegable.classList.contains("activo");
            btnHamburguesa.setAttribute("aria-expanded", estaAbierto);
            panelDesplegable.setAttribute("aria-hidden", !estaAbierto);

            if (estaAbierto){
                document.getElementById("btn-hamburguesa").style.opacity = "0.2"
            } else{
                document.getElementById("btn-hamburguesa").style.opacity = "1"
            };
        });

        // INICIO DEL CÓDIGO  DEL MENÚ 
    const enlacesMenu = panelDesplegable.querySelectorAll("a");

    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener("click", function(evento) {
            panelDesplegable.classList.remove("activo");
            btnHamburguesa.setAttribute("aria-expanded", "false");
            panelDesplegable.setAttribute("aria-hidden", "true");
            const destino = enlace.getAttribute("href");
            if (destino === "#seccion-carrito") {
                evento.preventDefault(); // Evitamos el salto brusco
                const seccionCarrito = document.getElementById("seccion-carrito");
                if (seccionCarrito) {
                    seccionCarrito.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
    });
});

    } else {
        console.error("Error: Elementos del menú no encontrados.");
    }

     // CARRITO DE RESERVAS 
    let reservasUsuario = []; 
    
    const contenedorLista = document.getElementById("lista-reservas");
    const contadorTotal = document.getElementById("total-reservas");

    function actualizarInterfaz() {
        if (!contenedorLista) return;
        contenedorLista.innerHTML = ""; 

        if (reservasUsuario.length === 0) {
            contenedorLista.innerHTML = `<li class="list-group-item text-muted text-center bg-dark border-secondary">No has seleccionado ningún servicio aún.</li>`;
            contadorTotal.textContent = "0";
            return;
        }

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

    document.addEventListener("click", function(evento) {
        
        // Agregar reserva
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

        // Quitar reserva
        if (evento.target.classList.contains("btn-eliminar")) {
            const posicion = evento.target.getAttribute("data-indice");
            reservasUsuario.splice(posicion, 1); 
            actualizarInterfaz(); 
        }
    });
});