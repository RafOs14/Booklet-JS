/*Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar
una de las siguientes salidas según
corresponda:
● “Elegiste a Homero” si es 1.
● “Elegiste a Marge” si es 2.
● “Elegiste a Bart” si es 3.
● “Elegiste a Lisa” si es 4.
*/

let numero = prompt("Ingrese un numero: ");

//opcion 1

/*
switch (numero) {
    case "1":
        alert("Elegiste a Homero");
        break;
    case "2":
        alert("Elegiste a Marge");
        break;
    case "3":
        alert("Elegiste a Bart");
        break;
    case "4":
        alert("Elegiste a Lisa");
        break;
    default:
        alert("Ingrese un numero valido");
        break;
}*/


//Opcion 2

if (numero == 1) {
    alert("Elegiste a Homero");
} else if (numero == 2) {    
    alert("Elegiste a Marge");
} else if (numero == 3) {    
    alert("Elegiste a Bart");
} else if (numero == 4) {    
    alert("Elegiste a Lisa");
} else {
    alert("Ingrese un numero valido");
};
