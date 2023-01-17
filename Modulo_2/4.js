// ACTIVIDAD 4 PRESUPUESTO
// Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.


let presupuesto = parseInt(prompt('Ingrese un presupuesto: '));

if (presupuesto >= 0 && presupuesto <= 1000) {
    alert('Presupuesto bajo');
}else if (presupuesto >= 1001 && presupuesto <= 3000) {
    alert('Presupuesto medio');
}else if (presupuesto > 3000) {
    alert('Presupuesto alto');
}else{
    alert('No es un presupuesto valido');
}
