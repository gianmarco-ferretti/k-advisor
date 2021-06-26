import './App.css';

import {useSelector} from "react-redux";

/*
import MyChecklist from "./components/MyChecklist";
import NavBar from './components/NavBar';
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

        </div>
    );
}

export default App;
