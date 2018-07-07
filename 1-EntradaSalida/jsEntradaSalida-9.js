/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//(sueldo x 10) / 100 o sueldo x 0,10.
	//sueldo + (sueldo x 10) / 100
	//sueldo(1 + 0,10) es factor comun. --> sueldo x 1,10 para aumento.
	// para un descuento de de 25%  ---> sueldo x 0,75.

	var sueldo;
	var aumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	aumento = (sueldo * 10)/100;

	resultado = sueldo + aumento;

	document.getElementById('resultado').value = resultado;



}
