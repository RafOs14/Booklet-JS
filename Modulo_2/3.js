// ACTIVIDAD 3 ESCOGER PERSONAJE
// Solicitar al usuario un (1) un número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.


let numero = prompt('Ingrese un numero: ');

while (numero != 0){
    switch (numero) {
        case '1':
            alert('Elegiste a Homero');
            break;
        case '2':
            alert('Elegiste a Marge');
            break;
        case '3':
            alert('Elegiste a Bart');
            break;
        case '4':
            alert('Elegiste a Lisa');
            break;
        default:
            alert('No es un numero valido');
            break;
    }
}


