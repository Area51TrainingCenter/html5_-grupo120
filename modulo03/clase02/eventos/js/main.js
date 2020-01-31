var titulo=document.getElementById("titulo");
var textoInicial=titulo.innerText; // curso JS area51


var cambiar=document.getElementById('cambiar')
console.log(cambiar);

cambiar.addEventListener("click",tarea)
function tarea(){


	//var titulo=document.getElementById("titulo");
	titulo.innerText="Texto modificado por el usaurio";
	//titulo.classList.add("ocultar")
	//console.log("hizo click en cambiar");
}

var regresar=document.getElementById("regresar");
regresar.addEventListener("click",tarea2)

function tarea2(){
	//var titulo=document.getElementById("titulo");
	titulo.innerText=textoInicial;
	titulo.classList.add("uno") // agregar
	titulo.classList.remove("uno") // quita una clase

}


$(".lista li").click(tarea);

$("#titulo").innerText("uno")
