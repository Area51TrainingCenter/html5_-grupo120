console.log("cargo el archivo");

$("#show-modal").click(function(){
	// anula el compartamiento asginado al elemento anteriormente
	event.preventDefault();
	//$(".modal-bloque").show();
	$("body").addClass("hidden");
	$(".modal-bloque").fadeIn();

	//$(".modal-bloque").addClass("mostar-modal")

});

$(".cerrar-modal").click(function(){
	//$(".modal-bloque").hide();
	$(".modal-bloque").fadeOut();
	$("body").removeClass("hidden");
})



$(".op-tab").click(function(){

	let valor=$(this).attr("data-opcion")
	$(".item").hide();
	
	if(valor==""){
		$(".item").show();
		

	}
	else{
		$(".item-"+valor).show();
		
	}
	



})



/*
$(window).scroll(function(){


	let top=$(window).scrollTop();
	console.log(top);
	if(top>200){
		$("header").addClass("header-fixed");
		//console.log("registra el scroll")
	}
	else{
		$("header").removeClass("header-fixed");
	}

	if(top>300){
		$(".item").addClass("show-item");
	}	
})*/
