function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
		alert("Este mes no tiene mas de 29 días");
	break;

	default:
		alert("Este mes tiene 30 o mas días");

}


}//FIN DE LA FUNCIÓN