import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          modo oscuro
        </button>
        <Home />
      </header>
    </div>
  );
}

export default App;
