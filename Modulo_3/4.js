// ACTIVIDAD 4 EL INNOMBRABLE
// Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados.


let nombres = [];

while(true){
    let nombre = prompt('Ingrese un nombre: ');
    if(nombre == 'Voldemort'){
        break;
    }
    nombres.push(nombre);
}

alert(nombres.join(' - '));
