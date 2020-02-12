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

/*
$(".op-type1").click(function(){
	$(".item").hide();
	$(".item-type1").show();

	// $(".item-type3 , .item-type2").hide();
	
})
$(".op-type2").click(function(){
	$(".item").hide();
	$(".item-type2").show();

	// $(".item-type3 , .item-type2").hide();
	
})
$(".op-type3").click(function(){
	$(".item").hide();
	$(".item-type3").show();

	// $(".item-type3 , .item-type2").hide();
	
})

$(".op-typeall").click(function(){
	$(".item").show();
	

	// $(".item-type3 , .item-type2").hide();
	
})
*/

$(".op-tab").click(function(){

	let valor=$(this).attr("data-opcion")
	$(".item").hide();
	//$(".item").fadeOut();
	//$(".item").slideUp();
	//$(".item").addClass("ocultar");
	if(valor==""){
		$(".item").show();
		//$(".item").fadeIn();
		//$(".item").slideDown();

	}
	else{
		$(".item-"+valor).show();
		//$(".item-"+valor).fadeIn();
		//$(".item-"+valor).slideDown();	
	}
	



	/*valor=1 type1
	valor=2 type2
	valor=4 typeall*/
	
	/*if(valor==1){
			$(".item-type1").show();
	}
	else{
		if(valor==2){
			$(".item-type2").show();
		}
		else{
			if(valor==3){
				$(".item-type3").show();
			}
			else{
				$(".item").show();
			}
		}
	}*/
})

/*
$(window).load(function(){

})

$(document).ready(function(){

})
*/
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
})