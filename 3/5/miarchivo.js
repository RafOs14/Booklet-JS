/*Solicitar al usuario un (1) número de forma
consecutiva, hasta que se ingrese “ESC”.
Generar una única salida compuesta por
los siguientes productos, según el valor
ingresado en cada ciclo:
● “Tomate” si es 1.
● “Papa” si es 2.
● “Carne” si es 3.
● “Pollo” si es 4.
 */


let entrada = prompt("Por favor ingrese un número del 1 al 4: ");

while(entrada != "ESC"){
    
    switch(entrada){
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Ingrese un numero valido");
            break;
    }
    entrada = prompt("Por favor ingrese un número del 1 al 4: ");
}

