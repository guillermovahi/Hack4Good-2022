import '../css/App.css';
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
		</div>
      </header>
    </div>
  );
}

export default App;
