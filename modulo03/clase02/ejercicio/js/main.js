
var titulo=document.getElementById("titulo-contenido");
var parrafo=document.getElementById("parrafo-contenido");



var noticias=document.getElementById('noticias');

noticias.addEventListener("click",tarea1);

function tarea1(){
	console.log("hizo click en tarea 1")
	titulo.innerText="Bienvenido a la sección de Noticias";
	parrafo.innerText="aquí veras un resumen de las noticias ";
}

var tecnologia=document.getElementById("tecnologia");
tecnologia.addEventListener("click",tarea2)

function tarea2(){
	console.log("hizo click en tarea 2");
	titulo.innerText="Bienvenido a la sección de Técnologia";
	parrafo.innerText="aquí veras un resumen de las tecnologia";
}
