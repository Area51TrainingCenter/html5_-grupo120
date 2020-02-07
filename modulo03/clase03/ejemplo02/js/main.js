var secciones=[
	{
		titulo:"Seccion Noticias",
		contenido:'Esta es la informacion de noticias:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
	},
	{
		titulo:"Seccion Técnologia",
		contenido:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
	},
	{
		titulo:"Seccion Contacto",
		contenido:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
	},
	{
		titulo:"Seccion Tendencia",
		contenido:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
	}
]



$(".item-opcion").click(function(){
	$(".item-opcion").removeClass("activado");
	$(this).addClass("activado");
	var titulo=$(this).attr("data-titulo")
	var indice=$(this).attr("data-indice")

	let texto_titulo=secciones[indice].titulo
	let texto_contenido=secciones[indice].contenido
	

	$("#contenido").html("<h2>"+texto_titulo+"</h2><p>"+texto_contenido+"</p>") // reemplaza a nivel html 
	//$(".contenido").text() // reemplaza a nivel texto
})


$(".opcion-list").click(function(){

	//$(this).

	$(".list-movie").addClass("lista-vertical");

})


$(".opcion-grid").click(function(){

	//$(this).

	$(".list-movie").removeClass("lista-vertical");

})