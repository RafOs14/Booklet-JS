/*Si no existe un valor con la clave “comidas” en
el localStorage, crear un array vacío y cargarlo
de forma dinámica, solicitando al usuario
nombres de comida de forma consecutiva, 
hasta cinco (5) veces. Luego almacenarlo con
dicha clave. Si existe, recorrer el array, e
informar por alerta el menú cargado.*/


let comidas = localStorage.getItem('comidas');

if(comidas == null){
    const menu = [];
    for(let index = 0; index < 5; index++){
        menu.push(prompt(`Ingrese el nombre de la comida ${index + 1}`));
    }
    localStorage.setItem('comidas', JSON.stringify(menu));
}else{
    let menu = '';
    const arrayComidas = comidas.split(',');
    for(const nombreComida of arrayComidas){
        menu += nombreComida + '\n';
    }
    alert(`El menú cargado es: \n${menu}`);
}