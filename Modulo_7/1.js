// ACTIVIDAD 1 EL VISITANTE
// Si no existe un valor con la clave “nombre” en el localStorage, solicitar un nombre al usuario, 
// y almacenarlo con dicha clave. Si existe, mostrar el nombre obtenido desde el storage con una alerta.

let usuario = localStorage.getItem('nombre');

if (usuario == null) {
    usuario = prompt('Ingrese su nombre');
    localStorage.setItem('nombre', usuario);
} else {
    alert(`Hola ${usuario}`);
}


//Solucion Propuesta
// let usuario = localStorage.getItem('nombre');
// if (usuario == null) {
//     localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
// } else {
//     alert('EL NOMBRE ES ' + usuario);
// }