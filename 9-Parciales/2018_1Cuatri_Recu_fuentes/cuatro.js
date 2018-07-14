function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var suma;
	var respuesta;

	numero1=prompt("ingrese numero 1");
	numero2=prompt("ingrese numero 2");

	
	if(numero1==numero2)
	{
		respuesta=numero1 +  numero2;
	}
	else
	{
		if(numero1 > numero2)
		{
			
			respuesta=numero1/numero2;
		}
		else
		{
			numero1=parseInt(numero1);
			numero2=parseInt(numero2);

			respuesta=numero1+numero2;

			if(respuesta < 50)
			{
					respuesta="La suma es: " + respuesta + " y es menor a 50.";
			}
			

		}

	} 

	alert(respuesta);
	
}
