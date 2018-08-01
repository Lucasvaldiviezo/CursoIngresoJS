function mostrar()
{
	var animal;
	var peso;
	var temperatura
	var respuesta = "si"
	var cantanimales=0;
	//A
	var temperaturaspares=0;
	//B
	var pesomayor;
	var tempdelmaspesado;
	var animalmaspesado;
	//C
	var animalesmenorcero=0;
	//D
	var pesototal=0;
	var promediodelpeso;
	//F
	var pesominimobajocero;
	var pesomaximobajocero;

	while(respuesta != "no")
	{
		animal=prompt("Ingrese un animal del zoologico");

		peso=prompt("Ingrese el peso del animal");
		peso=parseInt(peso);
		while(isNaN(peso) || peso < 1 || peso > 1000)
		{
			peso=prompt("Peso erroneo, ingrese el peso del animal");
			peso=parseInt(peso);
		}
		pesototal = pesototal + peso;

		temperatura=prompt("Ingrese la temperatura del hábitat");
		temperatura=parseInt(temperatura);
		while(temperatura < -30 || temperatura > 30)
		{
			temperatura=prompt("Temperatura erronea, ingrese la temperatura del hábitat");
			temperatura=parseInt(temperatura);
		}

		//A
		if(temperatura%2==0)
		{
			temperaturaspares++;
		}
		//B
		if(cantanimales==0)
		{
			pesomayor = peso;
			animalmaspesado = animal;
			tempdelmaspesado = temperatura;
			pesomaximobajocero = peso;
			pesominimobajocero = peso;
		}

		if(peso > pesomayor)
		{
			animalmaspesado = animal;
			tempdelmaspesado = temperatura;

		}

		if(temperatura < 0)
		{
			animalesmenorcero++;
			if(peso > pesomaximobajocero)
			{
				pesomaximobajocero=peso;
			}else if(peso < pesominimobajocero)
			{
				pesominimobajocero=peso;
			}
		}
		//respuesta;
		respuesta=prompt("Si no desea seguir, escriba no");
		cantanimales++;

	}//while
	
	promediodelpeso=pesototal/cantanimales;

	document.write("A)La cantidad de temperaturas pares es: " + temperaturaspares + "<br>");
	document.write("B)El animal mas pesado es el " + animalmaspesado + " y su temperatura es " + tempdelmaspesado + "<br>");
	document.write("C)La cantidad de animales que viven bajo cero es: " + animalesmenorcero +"<br>");
	document.write("D)El promedio del peso de los animales es: " + promediodelpeso +"<br>");
	document.write("F)Los pesos maximo y minimo de los animales que viven bajo 0 son: Maximo: " + pesomaximobajocero + " || Minimo: " + pesominimobajocero +"<br>");
}
