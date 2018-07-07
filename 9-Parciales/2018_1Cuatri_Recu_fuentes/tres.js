function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var preciocondescuento;
	var iva;
	var precioconiva;

	precio = prompt("Ingrese precio");
	
	precio = parseInt(precio);

	porcentaje=prompt("Ingrese porcentaje");

	porcentaje=parseInt(porcentaje);

	descuento=precio * porcentaje/100;
	
	preciocondescuento= precio - descuento;
	
	iva= preciocondescuento * 21/100;
	
	precioconiva = preciocondescuento + iva;

	alert("Su descuento es de: " + descuento + " y su precio con descuento es: " + preciocondescuento + " Su iva es de: " + iva);

	document.getElementById('elPrecioFinal').value=precioconiva;


}
