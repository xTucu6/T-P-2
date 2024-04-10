var vocales = ["a", "e", "i", "o", "u"];
var texto = prompt("Introduce un texto");
var textomin = texto.toLowerCase();
var posicion = 0;
var parar = false;
for (var i = 0; i < textomin.length; i++) {
    for (var j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);

// Algumos los hice con ayuda de ChatGpt y viendo videos de Youtube 😅😤😆