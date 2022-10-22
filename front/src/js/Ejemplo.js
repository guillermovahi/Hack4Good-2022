import '../css/Ejemplo.css';
function Ejemplo() {

	function popUp() {
		var popup = document.getElementById("/Users/cx02860/Documents/Github/Hack4Good-2022/qr.png");
		popup.classList.toggle("show");
		//window.open("https://www.codigos-qr.com/qr/php/qr_img.php?d=Se%20ha%20accedido%20correctamente%20al%20historial%20m%C3%A9dico%20del%20paciente%20con%20CIPA%20654643564.&s=8&e=", 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
    }
  return (

	<div class="Ejemplo">
		<div class="Ejemplo-form">
			<h2>Informe médico</h2>
			<p>981203749801273412734</p>
			<textarea name="informe" placeholder='Escriba su informe aquí...'></textarea>
			<br/>
			<button type="submit" class="Ejemplo-button">Generar informe</button>
		</div>
		<vl/>
		<div class="Ejemplo-user">
			<h2>Médico - 980752982754372</h2>
			<img src='https://cdn.intra.42.fr/users/tvillare.jpeg' class='Ejemplo-image'></img>
		</div>
		<div class="Ejemplo-data">
			<h2>Datos</h2>
			
			<button type="submit" class="Ejemplo-button" onClick={popUp()}>Escanear QR CIPA </button>
			<button type="submit" class="Ejemplo-button">Alta paciente</button>
			<div class="Ejemplo-columns">
				<h2>Lista informes</h2>
				<ul>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
				</ul>
			</div>
			<div class="Ejemplo-columns">
				<h2>Lista CIDs</h2>
				<ul class="Ejemplo-list">
					<li>Hola.txt</li>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
					<li>Hola.txt</li>
				</ul>
			</div>
		</div>
    </div>
  );
}

export default Ejemplo;
