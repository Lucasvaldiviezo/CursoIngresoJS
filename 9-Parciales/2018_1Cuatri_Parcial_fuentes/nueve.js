function mostrar()
{
	var producto;
	var peso;
	var temperatura;
	var respuesta = "si"
	var cantproductos=0;
	//A
	var temperaturaspares=0;
	//B y F
	var pesomaximo;
	var pesominimo;
	var productomaspesado;
	//C
	var cantproductomenorcero=0;
	//D
	var pesototal=0;
	var promediodelpeso;
	

	while(respuesta != "no")
	{
		producto=prompt("Ingrese un producto");

		peso=prompt("Ingrese el peso del producto");
		peso=parseInt(peso);
		while(isNaN(peso) || peso < 1 || peso > 100)
		{
			peso=prompt("Peso erroneo, ingrese el peso del producto");
			peso=parseInt(peso);
		}
		pesototal = pesototal + peso;

		temperatura=prompt("Ingrese la temperatura de almacenamiento");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura=prompt("Temperatura erronea, ingrese la temperatura de almacenamiento");
			temperatura=parseInt(temperatura);
		}

		//A
		if(temperatura%2==0)
		{
			temperaturaspares++;
		}
		//B
		if(cantproductos==0)
		{
			pesomaximo = peso;
			pesominimo = peso;
			productomaspesado = producto;
			
		}else if(peso > pesomaximo)
		{
			productomaspesado = producto;
			pesomaximo = peso;

		}else if(peso < pesominimo)
		{
			pesominimo = peso;
		}

		if(temperatura < 0)
		{
			cantproductomenorcero++;
			
		}
		//respuesta;
		respuesta=prompt("Si no desea seguir, escriba no");
		cantproductos++;

	}//while
	
	promediodelpeso=pesototal/cantproductos;

	document.write("A)La cantidad de temperaturas pares es: " + temperaturaspares + "<br>");
	document.write("B)El producto mas pesado es el " + productomaspesado + "<br>");
	document.write("C)La cantidad de producto que se conservan bajo cero es: " + cantproductomenorcero +"<br>");
	document.write("D)El promedio del peso de los producto es: " + promediodelpeso +"<br>");
	document.write("F)Los pesos maximo y minimo de los productos son: Maximo: " + pesomaximo + " || Minimo: " + pesominimo +"<br>");
}
