window.onload = () =>{
document.addEventListener("DOMContentLoaded", function () {

        const buscador = document.getElementById("buscadorServicios");
        const filtro = document.getElementById("filtroCategoria");
        const servicios = document.querySelectorAll(".servicio-item");

        function filtrarServicios() {
            const texto = buscador.value.toLowerCase();
            const categoria = filtro.value;

            servicios.forEach(servicio => {
                const contenido = servicio.textContent.toLowerCase();
                const categoriaServicio = servicio.dataset.categoria;

                const coincideTexto = contenido.includes(texto);
                const coincideCategoria = categoria === "todos" || categoriaServicio === categoria;

                servicio.style.display =
                    (coincideTexto && coincideCategoria) ? "block" : "none";
            });
        }

        buscador.addEventListener("input", filtrarServicios);
        filtro.addEventListener("change", filtrarServicios);
    }); 

    // CAMBIAR TEMA
    // ICONOS ESTADO https://emojipedia.org/es/luna
    const botonModo     = document.getElementById("modoOscuroBtn");
    const ICON_LIGHT    = "☀️"; 
    const ICON_DARK     = "🌙";
  
    function aplicarModo(ModoClaro) {
        if (ModoClaro) {
            document.body.classList.add("light-mode");
            botonModo.textContent = ICON_LIGHT;
            botonModo.setAttribute("title", "Cambiar a modo oscuro");
        } else {
            document.body.classList.remove("light-mode");
            botonModo.textContent = ICON_DARK;
            botonModo.setAttribute("title", "Cambiar a modo claro");
        }
    }
    const preferencia = localStorage.getItem("modoClaro");
    aplicarModo(preferencia === "activo");

 
    // TOGGLE ON CLICK
    botonModo.addEventListener("click", function () {
        const actual = document.body.classList.contains("light-mode");
        aplicarModo(!actual);
        localStorage.setItem("modoClaro", !actual ? "activo" : "inactivo");
    });
}