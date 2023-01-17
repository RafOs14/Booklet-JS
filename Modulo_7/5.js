// ACTIVIDAD 5 AUMENTAR PRECIOS
// Obtener desde el localStorage el array de objetos almacenado durante la actividad 3, con la clave 
// ‘hamburguesas’. Recorrer el array , aumentando en un 30% el precio de cada producto. Por último, 
// volver a almacenar el array modificado en el localStorage con la misma clave.

let valor = localStorage.getItem('hamburguesas');

if (valor == null) {
    alert('No hay hamburguesas guardadas');
}
else{
    let hamburguesas = JSON.parse(valor);
    for (let i = 0; i < hamburguesas.length; i++) {
        hamburguesas[i].precio = hamburguesas[i].precio * 0.3;
    }
    localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));
}

//Solucion propuesta
// let guardadas = localStorage.getItem('hamburgesas');
// if (guardadas != null) {
//     let array = JSON.parse(guardadas);
//     array.forEach(hamburgesa => { hamburgesa.precio += (hamburgesa.precio * 0.3) });
//     localStorage.setItem('hamburgesas', JSON.stringify(array));
// }


