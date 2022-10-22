import '../css/App.css';
import Popup from 'reactjs-popup';

	function popUp() {
    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=Se%20ha%20accedido%20correctamente%20al%20historial%20m%C3%A9dico%20del%20paciente%20con%20CIPA%20654643564.&s=8&e=" class = "Ejemplo-popup"></img>

    //var popup = document.getElementById("https://bafkreigmrecgv3xrjb4l6pke4yksxfdqzyvkwmjsjttvtnox4jz6mnsfwq.ipfs.nftstorage.link/");
  //popup.classList.toggle("show"); 
  //window.open("https://bafkreigmrecgv3xrjb4l6pke4yksxfdqzyvkwmjsjttvtnox4jz6mnsfwq.ipfs.nftstorage.link/", 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
  }

function QR() {
  return (
    <div className="QR">
      <header className="App-header">
        <div class="card-body">
          <h4 class="card-title">
            Escane QR del paciente para autenticarle
          </h4>
      <Popup trigger={<button class="Ejemplo-button"> Escanear QR CIPA </button>}>
        <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=Se%20ha%20accedido%20correctamente%20al%20historial%20m%C3%A9dico%20del%20paciente%20con%20CIPA%20654643564.&s=8&e=" class = "Ejemplo-popup"></img>
       </Popup>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br>


       
		</div>
      </header>
    </div>
  );
}

export default QR;
