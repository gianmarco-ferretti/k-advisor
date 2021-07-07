import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyRestaurantList from "./components/MyRestaurantList";
import MySingleRestaurant from './components/MySingleRestaurant';
import React from "react";


function App() {

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
