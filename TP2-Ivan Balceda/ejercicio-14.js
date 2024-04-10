var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;
var caracter;
var i;
for (i = 0; i < numchar; i++) {
    caracter = cadena.charAt(i);
    if (i == numchar - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}