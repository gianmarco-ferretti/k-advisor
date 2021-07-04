import React from 'react'
import MySingleResHeader from './MySingleResHeader'
import MyCarousel from './MyCarousel'
import {useLocation} from 'react-router';
import MyMenu from './MyMenu';


export default function MySingleResaturant() {
    const location = useLocation();
    const ristorante = location.state.ristorante;

    console.log(ristorante)

    return (
        <div>
            <MySingleResHeader ristorante={ristorante}/>
            <MyCarousel ristorante= {ristorante}/>
            <MyMenu ristorante={ristorante}/>
        </div>
    )
}
