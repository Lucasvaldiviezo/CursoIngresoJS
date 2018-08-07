var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

	console.log(eleccionMaquina);

	document.getElementById('ganadas').value = "Ganadas: " + ContadorDeGanadas;
	document.getElementById('perdidas').value = "Perdidas: " + ContadorDePerdidas;
	document.getElementById('empatadas').value = "Empates: " + ContadorDeEmpates;

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1)
	{
		ContadorDeEmpates++;
		alert("Empate");
	}
	else if(eleccionMaquina == 2)
	{
		ContadorDePerdidas++;
		alert("Perdiste!");
	}
	else
	{
		ContadorDeGanadas++;
		alert("Ganaste!");
	}
	return mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
if(eleccionMaquina == 1)
	{
		ContadorDeGanadas++;
		alert("Ganaste!");
	}
	else if(eleccionMaquina == 2)
	{
		ContadorDeEmpates++;
		alert("Empate");
	}
	else
	{
		ContadorDePerdidas++;
		alert("Perdiste!");
	}
	return mostrarResultado();	
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == 1)
	{
		ContadorDePerdidas++;
		alert("Perdiste!");
	}
	else if(eleccionMaquina == 2)
	{
		ContadorDeGanadas++;
		alert("Ganaste!");
	}
	else
	{
		ContadorDeEmpates++;
		alert("Empate");
	}	

	return mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value = "Ganadas: " + ContadorDeGanadas;
	document.getElementById('perdidas').value = "Perdidas: " + ContadorDePerdidas;
	document.getElementById('empatadas').value = "Empates: " + ContadorDeEmpates;

	return comenzar();
}
