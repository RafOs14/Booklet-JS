// ACTIVIDAD 5 VALIDACIÓN
// Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor 
// booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. 
// Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada 
// ciclo una cadena a validar.


function validacion(cadena){
    if(cadena == ''){
        return false;
    }else{
        return true;
    }
}

let cadena = prompt('Ingrese una cadena');

while(cadena != 'ESC'){
    if(validacion(cadena)){
        alert('La cadena es valida');
    }else{
        alert('La cadena no es valida');
    }
    cadena = prompt('Ingrese una cadena');
}

