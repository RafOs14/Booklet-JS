/*Codificar dos funciones:
● Una función cotizarDolar(pesos), la cual recibe un
valor monetario en pesos argentinos, y lo retorna
en su equivalente en dólares.
● Una función cotizarPesos(dolar), que recibe un
valor monetario en dólares, y lo retorna en su
equivalente en pesos argentinos.
Luego invocar las funciones solicitando al usuario el
valor y el tipo de cotización a realizar.*/


const usdCompra = 42.50;
const usdVenta = 44.90;

const comprarDolar = (dolar) => dolar*usdCompra;
const venderDolar = (pesos) => pesos/usdVenta;

let operacion = (prompt("Ingrese la transacción a realizar : \n  1. Cambiar dolar a pesos \n 2. Cambiar pesos a dolar"));
let monto;

switch(operacion){
    case '1':
        monto = parseFloat(prompt("Ingrese el monto a cambiar: "));
        alert(comprarDolar(monto));
        break;
    case '2':
        monto = parseFloat(prompt("Ingrese el monto a cambiar: "));
        alert(venderDolar(monto));
        break;
    default:
        alert("Ingrese una opción válida");
};



