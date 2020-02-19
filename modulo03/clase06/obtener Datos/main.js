var intentos=0;


if(localStorage.login=="1"){
	window.location="panel.html";
}

$("#ingresar").click(function(){
	event.preventDefault();
	var valor_usuario=$("#nombre").val();
	var valor_password=$("#password").val();
	

	// si usuario=admin y password=123*** 

	if(valor_usuario=="admin" && valor_password=="123***"){
		console.log("usuario correcto");

		window.location="panel.html";
		localStorage.login="1"
	}
	else{
		intentos=intentos+1;
		if(intentos<=3)
		{
			// puedes equivocarte
			$(".error").show()
		}
		else{
			$("#registro").remove();
			$(".error").text("Usuario bloqueado , por favor comunicate con el encargado")
		}
		//intentos++;
		
	}

})