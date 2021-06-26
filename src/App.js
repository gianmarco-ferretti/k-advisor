import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Pagina2 from './components/Pagina2';
import Pagina1 from './components/Pagina1';
import NavBar from './components/NavBar';
import {useSelector} from "react-redux";

/*
import MyChecklist from "./components/MyChecklist";
import IntestazionePg2 from './components/IntestazionePg2';
import IntestazionePg1 from './components/IntestazionePg1';
import MyCard from './components/MyCard';
*/


function App() {

    const ristoranti = useSelector(state => state.ristoranti)
    console.log(ristoranti)

    return (
        <div className="App">
            <header>
                <h1>Kromin Advisor</h1>
            </header>
            <BrowserRouter>
                <NavBar/>
                <Route path="/" exact component={Pagina1}/>
                <Route path="/Pag2" exact component={Pagina2}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
