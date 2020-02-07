

$("#rojo").click(function(){
	$("#titulo").removeClass("verde")
	$("#titulo").addClass("rojo");
})

$("#verde").click(function(){
	$("#titulo").removeClass("rojo");	
	$("#titulo").addClass("verde");	
})
/*
$("#item1").click(function(){
	limpiarActivado();
	$("#item1").addClass("activado");
	
	
})

$("#item2").click(function(){
	limpiarActivado();
	$("#item2").addClass("activado");
	

})

$("#item3").click(function(){
	limpiarActivado();
	$("#item3").addClass("activado");
	
})

$("#item4").click(function(){
	limpiarActivado();
	$("#item4").addClass("activado");
	

})

$("#item5").click(function(){
	limpiarActivado();
	$("#item5").addClass("activado");
	

})

$("#item6").click(function(){
	limpiarActivado();
	$("#item6").addClass("activado");
	

})

$("#item7").click(function(){
	limpiarActivado();
	$("#item7").addClass("activado");
	

})

$("#item8").click(function(){
	limpiarActivado();
	$("#item8").addClass("activado");
	

})

$("#item9").click(function(){
	limpiarActivado();
	$("#item9").addClass("activado");
	

})
*/

$(".nav-site ul li").click(function(){
	limpiarActivado();
	//var texto=$(this).text();
	//console.log(texto);
	$(this).addClass("activado");
})


function limpiarActivado(){

	$(".nav-site ul li").removeClass("activado");
	/*
	$("#item1").removeClass("activado");
	$("#item2").removeClass("activado");
	$("#item3").removeClass("activado");
	$("#item4").removeClass("activado");
	$("#item5").removeClass("activado");
	$("#item6").removeClass("activado");
	$("#item7").removeClass("activado");*/
}


var cambio=0;

$(".estado").click(function(){
	/*if(cambio==0){
		$(".estado").addClass("prendido")	
		cambio=1;
	}
	else{
		$(".estado").removeClass("prendido")
		cambio=0;
	}*/
	$(".estado").toggleClass("prendido");
	
	

})

$("#tab-noticias").click(function(){
	/*$("#content-deportes").hide(2000);
	$("#content-noticias").show(3000);*/
	$("#content-deportes").slideUp();
	$("#content-noticias").slideDown();
		//$("#content-deportes").addClass("hide")
	//$("#content-noticias").removeClass("hide")
})


$("#tab-deportes").click(function(){
		$("#content-deportes").slideDown();
	$("#content-noticias").slideUp();
	//$("#content-noticias").addClass("hide")
	//$("#content-deportes").removeClass("hide")
})