// ACTIVIDAD 4 COTIZACIÓN
// Codificar dos funciones:
// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna 
// en su equivalente en dólares.
// Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su 
// equivalente en pesos argentinos. Luego invocar las funciones solicitando  al usuario el valor y el 
// tipo de cotización a realizar.


const cotizacionDolar = 320

function cotizarDolar(pesos){
    return pesos / cotizacionDolar;
}

function cotizarPesos(dolar){
    return dolar * cotizacionDolar;
}

let cotizacion = parseInt(prompt('Ingrese el tipo de cotización: 1- Dolar o 2- Pesos'));
let valor = parseFloat(prompt('Ingrese el valor a cotizar'));

if(cotizacion == 1){
    alert(cotizarDolar(valor));
}

if(cotizacion == 2){
    alert(cotizarPesos(valor));
}


//Solucion Propuesta

/*const COTIZACION_DOLAR = 150;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}*/

