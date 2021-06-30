import React from 'react'
import MySingleResHeader from './MySingleResHeader'
import MyCarousel from './MyCarousel'
import {useLocation} from 'react-router';
import MyMenu from './MyMenu';


//Ho usato useLocation (passando un oggetto al Link del child) per avere il value su questo file




export default function MySingleResaturant() {
    const location = useLocation();
    const ristorante = location.state.ristorante;


    return (
        <div>
            <MySingleResHeader ristorante={ristorante}/>
            <MyCarousel ristorante= {ristorante}/>
            <MyMenu ristorante={ristorante}/>
            
        </div>
    )
}
