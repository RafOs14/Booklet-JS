/*Si no existe un valor con la clave “nombre” en el
localStorage, solicitar un nombre al usuario, y
almacenarlo con dicha clave. Si existe, mostrar
el nombre obtenido desde el storage con una
alerta.*/

let usuario = localStorage.getItem('nombre');

if(usuario == null){
    localStorage.setItem('nombre', prompt('Ingrese su nombre'));
}else{
    alert(`El usuario almacenado en el local storage es: ${usuario}`);
}