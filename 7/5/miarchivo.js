/*Obtener desde el localStorage el array de objetos
almacenado durante la actividad 3, con la clave
‘hamburguesas’. Recorrer el array , aumentando en un
30% el precio de cada producto. Por último, volver a
almacenar el array modificado en el localStorage con la
misma clave.*/


let almacenado = localStorage.getItem('hamburguesas');
let array = JSON.parse(almacenado);

for(index = 0; index < array.length; index++){
    array[index].precio = array[index].precio * 1.3;
}

localStorage.setItem('hamburguesa', JSON.stringify(array));