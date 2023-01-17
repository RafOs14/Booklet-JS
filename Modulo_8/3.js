// ACTIVIDAD 3 ELEGIR DESTINO
// Declarar un array de países, y crear una etiqueta select. Por cada país, concatenar una etiqueta 
// option a una template de caracteres, asignando el resultado al interior de la etiqueta padre. 
// El value de cada opción es la posición de la ciudad en la colección. Por último, agregar el 
// select al body.


const paises = [
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'Ecuador',
    'Paraguay',
    'Perú',
    'Uruguay',
    'Venezuela'
];

const select = document.createElement('select');

for (let i = 0; i < paises.length; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = paises[i];
    select.appendChild(option);
}

document.body.appendChild(select);

// Solucion propuesta

// const paises = ['ARGENTINA', 'URUGUAY', 'BRASIL', 'CHILE'];
// let select = document.createElement("select");
// for (let index = 0; index < paises.length; index++) {
//     select.innerHTML +=  `<option value='${index}'>${paises[index]}</option>`;
// }
// document.body.appendChild(select);

