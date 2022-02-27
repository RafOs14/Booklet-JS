/*Codificar una función que reciba un número
decimal por parámetro, y lo retorne redondeado
al entero más cercano. Para ello, puede
emplearse Math.round.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un número al
usuario.*/

function decimal(numero) {
    numero = parseInt(numero);
    numero = Math.round(numero);
    return numero;
}

for(var i = 0; i < 5; i++) {
    var numero = prompt("Ingrese un numero decimal");
    alert(decimal(numero));
}