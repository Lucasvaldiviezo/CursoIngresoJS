/* 
Maria F 15
Jose M 33
Fer F 25
*/

/*
1-
  a-
  b-
  c-
  d-

*/

function mostrar()
{
	var contador = 0;
	var nombre;//no validacion
	var sexo;//m o f
	var edad;//no puede ser menor a 0 o mayor a 100 o isNaN
	//1
	var cantmujeres = 0;
	var canthombres = 0;
	var cantmayores = 0;
	var cantmenores = 0;
	//2
	var cantmujeresmayores = 0;
	var canthombresmayores = 0;
	var canthombresmenores = 0;
	var cantmujeresmenores = 0;
	//3
	var edadtotal=0;
	var edadtotalmujeres=0;
	var edadtotalhombres=0;
	var promediototal;
	var promediohombres;
	var promediomujeres;
	//4
	var nombredelmayor;
	var nombredelmenor;
	var nombremujermayor;
	var edadmayor;
	var edadmenor;
	var edadmujermayor;

	
	while(contador < 3)
	{
		nombre=prompt("Ingrese nombre");
		sexo=prompt("Ingrese M o F para indicar su sexo");
		
		while(sexo !="f" && sexo !="m")
		{
			sexo=prompt("Ingrese M o F para indicar su sexo");
		}
		
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);

		while(edad < 0 || edad > 100 || isNaN(edad))
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}

		//hasta aca obtengo todos los datos.
		//1-
		/*if(sexo == "f")
		{
			cantmujeres++;
			edadtotalmujeres+= edad;
		}else
		{
			canthombres++;
			edadtotalhombres+= edad;
		}

		if(edad < 18)
		{
			cantmenores++;
		}else
		{
			cantmayores++;
		}*/

		//1-2-3-
		if(sexo == "f")
		{	
			if(edad < 18)
			{
			cantmenores++;
			cantmujeres++;
			cantmujeresmenores++;
			edadtotalmujeres+= edad;
			}else
			{
			cantmayores++;
			cantmujeres++;
			cantmujeresmayores++;
			edadtotalmujeres+= edad;
			}

			if(contador==0)
			{
			nombremujermayor = nombre;
			edadmujermayor = edad;
			}
			if(edad > edadmujermayor)
			{
				edadmujermayor = edad;
				nombremujermayor = nombre;
			}
			
		}
			
			
		if(sexo == "m")
		{
			if(edad < 18)
			{
			cantmenores++;
			canthombres++;
			canthombresmenores++;
			edadtotalhombres+= edad;
			}
			 else
			{
			cantmayores++;
			canthombres++;
			canthombresmayores++;
			edadtotalhombres+= edad;
			
			}
			
		}

		//3-
		edadtotal= edadtotal + edad;
		
		//4-
		if(contador == 0)
		{
			nombredelmayor=nombre;
			edadmayor=edad;
			edadmenor=edad;
		}

		if(edad > edadmayor)
		{
			edadmayor = edad;
			nombredelmayor = nombre;
		}else if (edad < edadmenor)
		{
			edadmenor = edad;
			nombredelmenor = edad;
		}

		//contador
		contador++;

	}

	promediototal = edadtotal/3;
	promediomujeres = edadtotalmujeres/cantmujeres;
	promediohombres = edadtotalhombres/canthombres;

	document.write("Punto 1:" + "<br>");
	document.write("Hay: " + cantmujeres + " mujeres" + "<br>");
	document.write("Hay: " + canthombres + " varones" + "<br>");
	document.write("Hay: " + cantmenores + " menores" + "<br>");
	document.write("Hay: " + cantmayores + " mayores" + "<br>");

	document.write("Punto 2:" + "<br>");
	document.write("Hay: " + cantmujeresmayores + " mujeres mayores" + "<br>");
	document.write("Hay: " + cantmujeresmenores + " mujeres menores" + "<br>");
	document.write("Hay: " + canthombresmayores + " hombres mayores" + "<br>");
	document.write("Hay: " + canthombresmenores + " hombres menores" + "<br>");

	document.write("Punto 3:" + "<br>");
	document.write("El promedio de la edad total es: " + promediototal + "<br>");
	document.write("El promedio de la edad de varones es: " + promediohombres + "<br>");
	document.write("El promedio de la edad de mujeres es: " + promediomujeres + "<br>");

	document.write("Punto 4:" + "<br>");
	document.write("El nombre del mayor es: " + nombredelmayor + "<br>");
	document.write("El nombre del menor es: " + nombredelmenor + "<br>");
	document.write("El nombre de la mujer mayor " + nombremujermayor + "<br>");
	//while(contador)
}
