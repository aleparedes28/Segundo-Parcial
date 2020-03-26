	var a = 0
	var b = 250;
document.getElementById("textActual").value = a;


function agregarManzanas(a, b){
	a = a + b;
	document.getElementById("textActual").value = a;
	mostrarActual();
}

function agregar5(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 5);
}

function agregar15(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 15);
}

function agregar30(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 30);
}

function agregar50(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 50);
}

function mostrarActual(){
	a = parseInt(document.getElementById("textActual").value);
	var num = a * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function mostrarTotal(){
	a = parseInt(document.getElementById("textTotal").value);
	var num = a * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function calcular(){
	a = parseInt(document.getElementById("textActual").value)*45;
	var num = 250*45;
	var porcentaje = (a*100)/num;
	document.getElementById("textPorcentaje").value = porcentaje;

	if(porcentaje>=70){
		document.getElementById("image").src = "camion.jpg";
	}
var a = 0
	var b = 250;
document.getElementById("textActual").value = a;


function agregarManzanas(x, y){
	x = x + y;
	document.getElementById("textActual").value = x;
	mostrarActual();
}

function agregar5(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 5);
}

function agregar15(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 15);
}

function agregar30(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 30);
}

function agregar50(){
	a = parseInt(document.getElementById("textActual").value);
	agregarManzanas(a, 50);
}

function mostrarActual(){
	a = parseInt(document.getElementById("textActual").value);
	var num = a * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function mostrarTotal(){
	a = parseInt(document.getElementById("textTotal").value);
	var num = a * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function calcular(){
	a = parseInt(document.getElementById("textActual").value)*45;
	var num = 250*45;
	var porcentaje = (a*100)/num;
	document.getElementById("textPorcentaje").value = porcentaje;

	if(porcentaje>=70){
		document.getElementById("image").src = "camion.jpg";
	}
}