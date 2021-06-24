import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import IntestazionePg2 from './components/IntestazionePg2';
import IntestazionePg1 from './components/IntestazionePg1';


function App() {



  return (
    <div className="App">
      <header >
      <NavBar/>
      </header>
      <IntestazionePg1/>
      {/* <IntestazionePg2/>  */}
    </div>
  );
}

export default App;
