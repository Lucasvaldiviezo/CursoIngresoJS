
function mostrar()
{
	var base;
	var altura;
	var area;
	var perimetro;

	base = prompt("Ingrese la Base");
	base = parseInt(base);

	altura=prompt("Ingrese la Altura");
	altura=parseInt(altura);

	area = base * altura/2
	perimetro= base * 3;

	alert("El area del triangulo es: " + area + " y su perimetro: " + perimetro);


}
