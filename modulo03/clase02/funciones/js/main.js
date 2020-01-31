/*
var monto_a_pagar;
var igv=18;
var total_a_pagar;

total_a_pagar=(monto_a_pagar*18)/100;

*/

fechaActual();

function calcularIGV(){
	var monto_a_pagar=100;
	var igv=18;
	var total_a_pagar;

	total_a_pagar=(monto_a_pagar*18)/100;
	console.log(total_a_pagar);

}

function sumar(){
	let monto_a_pagar;
	console.log(monto_a_pagar);
}

function mesActual(){
	var fecha=new Date();
	var mes=fecha.getMonth();

	var lista_meses=[
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	]
	
	console.log(lista_meses[mes])

}



function fechaActual(){
	var fecha=new Date();
	var mes=fecha.getMonth();
	var anio=fecha.getFullYear();
	var dia=fecha.getDate();
	var lista_meses=[
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	]
	var fecha_formato=dia+" de "+lista_meses[mes]+ " del "+ anio;
//	console.log(fecha_formato);

}

function estadoCliente(){
	var estado;// valiado el estado de cliente
	return estado;
}


var resultado=estadoCliente();
if(resultado=="APTO"){

}

function limpiarInputs(){
	// limpiar inputs
}


function sumar(){
	var n1=10;
	var n2=20;
	var suma=n1+n2;
	//return suma;
console.log(suma)
}

sumar();
sumar();

function sumarValores(valor1,valor2){
	var suma=valor1+valor2;
	console.log(suma);	
}


sumarValores(3,20);
sumarValores(5,3);
sumarValores(2,15);



function IGV(valor){
	return valor*0.18;
}


var calculo=IGV(52);
var calculo2=IGV(31);

