// ACTIVIDAD 1 ENTRADAS Y SALIDAS
// Codificar tres funciones:
// Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// Una función procesamiento(valor), donde se transforme la entrada.
// Una función salida(valor), la cual mostrará el resultado por alerta.
// Luego, invocar las tres funciones.

function entrada() {
    return prompt('Ingrese un valor');
}

function procesamiento(valor) {
    return valor.toUpperCase();
}

function salida(valor) {
    alert(valor);
}

let valor = entrada();
valor = procesamiento(valor);
salida(valor);
