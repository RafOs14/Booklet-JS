// ACTIVIDAD 5 COMPRANDO PRODUCTOS
// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una 
// única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

let products = [];
let entry = prompt('Ingrese un número de 1 a 4: ');

while(true){
    if(entry == 'ESC'){
        break;
    }
    if(entry == 1){
        products.push('Tomate');
    }
    if(entry == 2){
        products.push('Papa');
    }
    if(entry == 3){
        products.push('Carne');
    }
    if(entry == 4){
        products.push('Pollo');
    }
    entry = prompt('Ingrese un número de 1 a 4: ');
}

alert(products.join(' - '));
