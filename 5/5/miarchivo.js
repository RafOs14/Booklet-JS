/*Declarar una clase Cliente que permita:
Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número 
de teléfono del cliente.
Un método transferirDinero(valor), que permita  obtener y restar cierta 
cantidad del presupuesto, siempre que este parámetro sea menor al valor 
enviado, y mayor que cero.
Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al 
usuario cinco (5) números. Informar por alerta si cada uno de los clientes 
cuenta con el presupuesto suficiente para realizar una transferencia de 
igual monto al ingresado.*/


class Cliente {
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0) && (valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor;
        }else{
            return 0;
        }
    }
};

const cliente1 = new Cliente("Papu",1000,true,123456789);
const cliente2 = new Cliente("Martin",5000,true,123123123);
const cliente3 = new Cliente("Juan",10000,false,555342345);

for(let i = 0; i<5; i++ ){
    let valor = parseInt(prompt("Ingrese el valor a transferir: "));
    if(cliente1.transferirDinero(valor)){
        alert(`El cliente ${cliente1.nombre} puede transferir ${valor}`);
    }
    if(cliente2.transferirDinero(valor)){
        alert(`El cliente ${cliente2.nombre} puede transferir ${valor}`);
    }
    if(cliente3.transferirDinero(valor)){
        alert(`El cliente ${cliente3.nombre} puede transferir ${valor}`);
    }
};



