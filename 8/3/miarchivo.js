/*Declarar un array de países, y crear una etiqueta
select. Por cada país, concatenar una etiqueta
option a una template de caracteres, asignando el
resultado al interior de la etiqueta padre. El value
de cada opción es la posición de la ciudad en la
colección. Por último, agregar el select al body.*/

const paises = ['España', 'Francia', 'Italia', 'Alemania', 'Portugal'];

let select = document.createElement('select');

for(let i = 0; i < paises.length; i++){
    select.innerHTML += `<option value="${i}">${paises[i]}</option>`;
}

document.body.appendChild(select);