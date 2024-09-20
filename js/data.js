window.addEventListener("DOMContentLoaded", function() {
    const dato = localStorage.getItem("datoGuardado");
    const mostrarDato = document.getElementById("data");

    if (dato) {
        mostrarDato.textContent = dato; // Mostrar el dato en la página
    } else {
        mostrarDato.textContent = "No hay datos guardados."; // Mensaje si no hay dato
    }
});
