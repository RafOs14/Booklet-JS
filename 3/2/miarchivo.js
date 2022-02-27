/*Solicitar al usuario un (1) un número. Emplear
este valor para determinar la cantidad de
repeticiones, y efectuar una salida por alerta
con el mensaje “lado” en cada repetición.
Pero si se alcanza un número de iteraciones
mayor que cuatro (4), cancelar el ciclo.
 */


let numero = prompt("Ingrese un numero: ");

for(let i = 0; i < numero; i++){
    if(i > 3){
        break;      
    }  
    alert("lado");
};