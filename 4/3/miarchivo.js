/*Codificar una función con la siguiente cabecera:
impuesto(precio, porcentaje). En ella, se retorna
un valor numérico compuesto por el precio
recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un precio y
porcentaje al usuario.
*/


function impuesto(precio, porcentaje){
    var precioTotal = precio + ((precio * porcentaje)/100);   
    return precioTotal;
};

for(var i = 0; i < 5; i++){
    let precio = Number(prompt("Ingrese el precio: "));
    let porcentaje = Number(prompt("Ingrese el porcentaje: "));
    console.log(impuesto(precio, porcentaje));
};