function mostrar()
{
	
	
	// declarar variables
	
	var contador=0;
	var respuesta='si';
	var numeroIngresado;
	//var maximo=-999999;
	//var minimo=999999;
	var maximo;
	var minimo;
	var bandera;

	bandera = 0;

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{

			if(numeroIngresado > maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado < minimo)
			{
				minimo=numeroIngresado;
			}
		}//else

		/*if(bandera==0)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
			bandera=1;
		}else
		{

			if(numeroIngresado > maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado < minimo)
			{
				minimo=numeroIngresado;
			}
		}//else*/
		

		
		respuesta = prompt("Ingrese no para salir");
	
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN