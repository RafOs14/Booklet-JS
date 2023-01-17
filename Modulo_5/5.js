// ACTIVIDAD 5 EL CLIENTE
// Declarar una clase Cliente que permita:
// Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
// Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, 
// siempre que este parámetro sea menor al valor enviado, y mayor que cero.
// Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. 
// Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una 
// transferencia de igual monto al ingresado.

class Cliente{

    constructor(nombre, presupuesto, tarjetaDescuento, numeroTelefono){
        this.nombre = nombre;
        this.presupuesto =parseFloat(presupuesto);
        this.tarjetaDescuento = tarjetaDescuento;
        this.numeroTelefono = numeroTelefono;
    }

    transferirDinero(valor){
        if(valor < this.presupuesto && valor > 0){
            this.presupuesto -= valor;
            return valor;
        }else{
            return 0;
        }
    }
}

let nombre = prompt('Ingrese el nombre del cliente');
let presupuesto = prompt('Ingrese el presupuesto del cliente');
let tarjetaDescuento = prompt('Ingrese si tiene tarjeta de descuento');
let numeroTelefono = prompt('Ingrese el numero de telefono del cliente');
let cliente = new Cliente(nombre, presupuesto, tarjetaDescuento, numeroTelefono);

for(let i = 0; i < 5; i++){
    let valor = prompt('Ingrese el valor');
    if(cliente.transferirDinero(valor)){
        alert('El cliente tiene el presupuesto suficiente');
    }else{
        alert('El cliente no tiene el presupuesto suficiente');
    }
}

