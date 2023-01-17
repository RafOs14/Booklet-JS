// ACTIVIDAD 1 EL PIZARRÓN
// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje 
// ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.


let nro = parseInt(prompt('Ingrese un número: '));
let texto = prompt('Ingrese un texto: ');

for (let i = 0; i < nro; i++) {
    alert(texto);
}

