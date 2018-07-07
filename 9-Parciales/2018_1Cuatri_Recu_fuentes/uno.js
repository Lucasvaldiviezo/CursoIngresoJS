
function mostrar()
{
	/*var base;
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

	Enunciado nuevo: Se ingresan 3 numeros, 
	1)se muestra la suma de los 3, 
	2)el promedio de los 3 
	3)la resta de los 3 en un unico alert.*/ 

	var numero1;
	var numero2;
	var numero3;
	var suma;
	var promedio;
	var resta;

	numero1= prompt("Ingrese numero 1");
	numero1=parseInt(numero1);
	
	numero2= prompt("Ingrese numero 2");
	numero2=parseInt(numero2);
	
	numero3= prompt("Ingrese numero 3");
	numero3=parseInt(numero3);

	suma = numero1+numero2+numero3;
	promedio = suma/3;
	resta=numero1-numero2-numero3;

	alert("La suma de los numeros es: " + suma + ". El promedio es: " + promedio + ". La resta es: " + resta);
}
