
document.getElementById("buttonText").addEventListener("click", function() {
    const dato = document.getElementById("inputText").value;
    localStorage.setItem("datoGuardado", dato);
    document.getElementById("inputText").value = ""; // Limpiar el input
});
