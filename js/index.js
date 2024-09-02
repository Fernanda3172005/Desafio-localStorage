// Seleccionar los elementos del DOM
let inputText = document.getElementById("inputText");  // Selecciona el campo de texto
let buttonText = document.getElementById( "buttonText");   // Selecciona el botón

// Agregar un evento 'click' al botón
buttonText.addEventListener("click", function() {
// Guardar el valor del input en localStorage
let valor = inputText.value;  // Obtiene el valor ingresado en el campo de texto
localStorage.setItem("dato", valor); // Guarda el valor en localStorage con la clave 'dato'
    
// Mensaje para confirmar
console.log("Dato guarado:", valor);
});
