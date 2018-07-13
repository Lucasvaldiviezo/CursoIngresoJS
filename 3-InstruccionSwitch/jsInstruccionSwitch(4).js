function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 diás");
			break;

		case "Febrero"
			alert("Tiene 28 diás");
			break;

		default:
			alert("tiene 31 diás");
			

	}



}//FIN DE LA FUNCIÓN