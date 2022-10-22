import '../css/Ejemplo.css';
function Ejemplo() {

	function popUp() {
	    //var popup = document.getElementById("https://bafkreigmrecgv3xrjb4l6pke4yksxfdqzyvkwmjsjttvtnox4jz6mnsfwq.ipfs.nftstorage.link/");
		//popup.classList.toggle("show"); 
		//window.open("https://bafkreigmrecgv3xrjb4l6pke4yksxfdqzyvkwmjsjttvtnox4jz6mnsfwq.ipfs.nftstorage.link/", 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
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
			<img src='https://bafybeigvtutchyr74bgac7kzz5ojk63sh66hvmcrulkcgpjk44hpdrfe3u.ipfs.nftstorage.link/' class='Ejemplo-image'></img>
		</div>
		<div class="Ejemplo-data">
			<p> </p>
			<p> </p>
			<p> </p>

{/* 			<button type="submit" class="Ejemplo-button" onClick={popUp()}>Escanear QR CIPA </button>
 */}			<button type="submit" class="Ejemplo-button">Alta paciente</button>
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
