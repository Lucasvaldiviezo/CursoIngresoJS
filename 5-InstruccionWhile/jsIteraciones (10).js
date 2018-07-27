function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var totalpositivo = 0;
	var totalnegativo = 0;
	var contadorpositivos = 0;
	var contadornegativos = 0;
	var contadorceros = 0;
	var numerospares = 0;
	var resto;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado= prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("Ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		resto = numeroIngresado % 2;

		if(numeroIngresado < 0)
		{
			contadornegativos++;
			totalnegativo = totalnegativo + (numeroIngresado);
		}else if(numeroIngresado > 0)
		{
			contadorpositivos++;
			totalpositivo=totalpositivo + numeroIngresado;
		}else
		{
			contadorceros++;
		}

		
		if(resto == 0)
		{
			numerospares++;	
		}

		respuesta=prompt("Ingrese no para salir");	
	}

	promediopositivos = totalpositivo / contadorpositivos;
	promedionegativos = totalnegativo / contadornegativos;
	diferencia = totalpositivo - totalnegativo;

	document.write("La suma de los negativos es: " + totalnegativo + "<br>"); 
	document.write("La suma de los positivos es: " + totalpositivo + "<br>"); 
	document.write("La cantidad de numeros positivos es: " + contadorpositivos + "<br>"); 
	document.write("La cantidad de numeros negativos es: " + contadornegativos + "<br>"); 
	document.write("La cantidad de ceros es: " + contadorceros + "<br>"); 
	document.write("La cantidad de numeros pares es: " + numerospares + "<br>"); 
	document.write("El promedio  de los numeros positivos es: " + promediopositivos + "<br>"); 
	document.write("El promedio  de los numeros negativos es: " + promedionegativos + "<br>"); 
	document.write("La diferencia entre  positivos y negativos es: " + diferencia + "<br>");



	//document.write("numeroIngresado");


}//FIN DE LA FUNCIÓN