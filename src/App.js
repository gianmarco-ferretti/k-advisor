import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import MyNavbar from './components/MyNavbar';

import MyRestaurantList from "./components/MyRestaurantList";

import MySingleRestaurant from './components/MySingleRestaurant';
import {useDispatch, useSelector} from "react-redux";
import {fetchCommenti} from "./actions";
import React from "react";


function App() {

    /*TODO GIANMARCO: provare a metterli nel redux store correttamente
      const ristoranti = useSelector(state => state.ristoranti);
       const dispatch = useDispatch();
       for (const ristorante of ristoranti) {
           dispatch(fetchCommenti(ristorante.reviews_endpoint))
       }
   */
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
