// ACTIVIDAD 2 REDONDEO
// Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más 
// cercano. Para ello, puede emplearse  Math.round.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al 
// usuario.

function redondeo(nro){
    return Math.round(nro);
}

for(let i = 0; i < 5; i++){
    let nro = parseFloat(prompt('Ingrese un número decimal'));
    alert(redondeo(nro));
}

