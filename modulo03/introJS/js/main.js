// sintaxis
var nombre;
/*
var nombre completo; // error
var nombre_completo; // correcto
var nombreCompleto;  // correcto
var NombreCompleto;  // correcto

var 1; // error
var 1dotdo; //error
*/

var edad;
edad="jtorriccelli@gmail.com";

var correo;
correo="jtorriccelli@gmail.com";

console.log("el valor de la variable es : ");
console.log(nombre);

//var nombreactual="diego";

// la asignacion de valor se da de izquierda a derecha
nombre="juan carlos";
//nombre=nombreactual;
//nombre // "juan carlos";

console.log("el valor de la variable es : ");
console.log(nombre);


var nombre;
nombre="Diego";

var nombre="Diego";

var nombre;


/*
String 
Int
Double
Boolean
char
*/

var nombre;
var correo;
var edad;
var telefono;

nombre="JC";
correo="jc@gmail.com";
edad=20;
telefono="998999213";

console.log(nombre);
console.log(correo);
console.log(edad);
console.log(telefono);





























/* operaciones matematicas */

/* + , - , / , * , % */
/*
var num1=10;
var num2=30;
var suma;

suma=num1 + num2;

var n1;
n1=prompt("Ingresar el numero 1");

var n2;
n2=prompt("Ingresar n2");


var nuevo_n1=parseInt(n1);

var nuevo_n2=parseInt(n2);

var suma2 =nuevo_n1+nuevo_n2;



var n1=parseInt(prompt("ingresa N1"));
var n2=parseInt(prompt("Ingresa N2"));
var suma=n1+n2;



var n1=prompt("ingresa N1"); //"10"
n1=parseInt(n1);

var n2=prompt("ingresa N2"); //"10"
n2=parseInt(n2);

var suma=n1+n2;

var suma=parseInt(prompt("ingresa N1"))+parseInt(prompt("ingresar N2"));











*/
var pi=Math.PI;
var maximo=Math.max(10,20,30,440);
var minimo=Math.min(10,3,4,50,400);
var raiz=Math.sqrt(144);
var potencia=Math.pow(2,10);
var aboslute=Math.abs(-10);

var redondeo=Math.round(1.5);
var random=Math.random()*100;
var entero=Math.round(random);

console.log(entero);









var bool;

bool=true;
bool=false;
/*
var n1=10;
var n2=10;
var resultado=false;

if(resultado){
 // verdadero
 el mayor1
}
else{
	el mayor es n2
// falso
}
*/


//var fecha="28/01/2019";

var fecha = new Date();

var anio=fecha.getFullYear();
var mes=fecha.getMonth()+1; // 1 = 0;
var dia=fecha.getDate();
var dia_semana=fecha.getDay();


var horas=fecha.getHours();
var minutos=fecha.getMinutes();
var segundos=fecha.getSeconds();

console.log(dia + "/" +mes+ "/"+anio);

console.log(horas+":"+minutos+":"+segundos)

console.log("dia semana: "+dia_semana);



var alumno="JC"
var alumno2="Lexter";
var alumno3="David";

var nombres=[ "JC","Lexter","David","Lexter","David","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","JC","Lexter","David","ultimo elemento"];
console.log(nombres);
console.log(nombres[4]);
//nombres.push("Raul");
console.log(nombres)
console.log(nombres.length);
var indice_ultimo=nombres.length-1;
console.log(nombres[indice_ultimo]);


//persona=[nombre,edad,correo,estado,fechaingreso];
var persona=["Juan Carlos",22,"jtorricelli@gmail.com",true,fecha.getFullYear()];



var alumno=["Juan Carlos","HTML",[10,15,20]];
alumno[0]
alumno[1]
alumno[2][2] // [10,15,20]


var obj_alumno1={
	nombres:"Jc",
	apellidos:"Ramos Torriccelli",
	telefono:"987654345",
	estado:true,
	correo:"jtorricelli@gmail.com"
}

console.log(obj_alumno1.nombres);
console.log(obj_alumno1.correo);

var obj_alumno2={
	nombres:"Raul",
	apellidos:"Pacori",
	telefono:"987654999",
	estado:true,
	correo:"jtorricelli@gmail.com"
}





