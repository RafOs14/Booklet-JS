/*Codificar tres funciones:
● Una función entrada(), la cual solicite un valor al
usuario y lo retorne.
● Una función procesamiento(valor), donde se
transforme la entrada.
● Una función salida(valor), la cual mostrará el
resultado por alerta.
Luego, invocar las tres funciones.
*/

function entrada(){
    var valor = prompt("Ingrese un valor: ");
    return valor;
}

function procesamiento(valor){
    var valor = parseInt(valor);
    return valor;
}

function salida(valor){
    alert(`El valor ingresado por el usuario es ${valor}`);
}

salida(procesamiento(entrada()));