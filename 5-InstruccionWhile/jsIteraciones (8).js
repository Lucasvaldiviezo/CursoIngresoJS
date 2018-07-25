function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero = prompt("Ingrese el numero " + contador + " :");
		numero=parseInt(numero);
			if(numero < 0)
			{
				negativo=negativo * numero;
			}
			if(numero > 0)
			{
				positivo=positivo + numero;
			}
		respuesta=prompt("¿Desea continuar?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN