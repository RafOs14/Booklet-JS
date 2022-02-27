/*Obtener desde el localStorage el array de objetos
almacenado durante la actividad 3, con la clave
‘hamburguesas’. Recorrer el array generando un
listado con el detalle de cada hamburguesa,
asociando un número de selección en función de la
posición.
Por último, capturar una entrada con la selección del
usuario, confirmando la información del producto
escogido.*/

let almacenado = localStorage.getItem('hamburguesas');

if(almacenado != null){
    let array = JSON.parse(almacenado);
    let salida = 'Seleccionar hamburguesa: \n';

    for(let index = 0; index < array.length; index ++){
        salida += index + ' -> ' + array[index].nombre + ' $ ' + array[index].precio + '\n';  
    }

    let eleccion = parseInt(prompt(salida + '\n' + 'Ingresar una hamburguesa: '));
    if((eleccion >= 0) && (eleccion < array.length)){
        alert(`Hamburguesa seleccionada ${array[eleccion].nombre} total a pagar $ ${array[eleccion].precio}`);
    }else{
        alert("Error de seleccion");
    }
};
    