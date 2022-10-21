import './App.css';
import MetaMaskLoginButton from 'react-metamask-login-button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="card-body">
          <h4 class="card-title">
            Basic Actions
          </h4>
          <MetaMaskLoginButton />
          <button class="btn btn-primary btn-lg btn-block mb-3" id="connectButton">Connect</button>

        </div>
        <p>
          Arrestan a Little Manu por desorden publico en Parla.
        </p>
      </header>
    </div>
  );
}

export default App;
