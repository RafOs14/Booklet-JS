// ACTIVIDAD 2 ALMACENAR EL MENÚ
// Si no existe un valor con la clave “comidas” en el localStorage, crear un array vacío y cargarlo de forma 
// dinámica, solicitando al usuario nombres de comida de forma consecutiva,  hasta cinco (5) veces. 
// Luego almacenarlo con dicha clave. Si existe, recorrer el array, e informar por alerta el menú cargado.

let comida = localStorage.getItem('comidas');

if (comida == null) {
    comida = [];
    for (let i = 0; i < 5; i++) {
        comida.push(prompt('Ingrese un nombre de comida'));
    }
    localStorage.setItem('comidas', comida);
}
else {
    let menu = '';
    const arrayComidas = comida.split(' , ');
    for (const nombComida of arrayComidas){
        menu += nombComida + ' , ';
    }

    alert(`El menu es: ${menu}`);
}

//Solución propuesta
// let comidas = localStorage.getItem('comidas');
// if (comidas == null) {
//     const menu = [];
//     for (let index = 0; index < 5; index++) {
//         menu.push(prompt('INGRESAR COMIDA'))
//     }
//     localStorage.setItem('comidas', menu);
// } else {
//     let menu = '';
//     const arrayComidas = comidas.split(',');
//     for (const nombreComida of arrayComidas) {
//         menu += nombreComida + '\n';
//     }
//     alert(menu);
// }

