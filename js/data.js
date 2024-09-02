//Seleccionar el elemento del DOM donde se mostrará el dato
let spanData = document.getElementById("data"); // Selecciona el span con id 'data'

// Recuperar el valor de localStorage
let valorGuardado = localStorage.getItem("dato");// Obtiene el valor de la clave 'dato'

// Mostrar el valor en la página
if (valorGuardado) { // Verifica si hay un valor guardado
    spanData.textContent = valorGuardado; // Muestra el valor dentro del span
} else {
    spanData.textContent = "No hay datos guardados."; // Mensaje alternativo si no hay valor
}