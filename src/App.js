import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import MyNavbar from './components/MyNavbar';

import MyRestaurantList from "./components/MyRestaurantList";

import MySingleRestaurant from './components/MySingleRestaurant';



/*
import MyChecklist from "./components/MyChecklist";
import IntestazionePg2 from './components/IntestazionePg2';
import IntestazionePg1 from './components/IntestazionePg1';
import MyCard from './components/MyCard';
*/


function App() {

    /*            const ristoranti = useSelector(state => state.ristoranti)
                console.log(ristoranti)*/


    return (
        <div className="App">
            <BrowserRouter>
                <MyNavbar></MyNavbar>
                <Route path="/restaurant/:id/" exact component={MySingleRestaurant}/>
                <Route path="/" exact component={MyRestaurantList}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
