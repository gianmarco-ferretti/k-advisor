import React from 'react'
import MySingleResHeader from './MySingleResHeader'
import MyCarousel from './MyCarousel'
import {useLocation} from 'react-router';
import MyMenu from './MyMenu';
import MyComSec from './MyComSec';


export default function MySingleResaturant() {
    const location = useLocation();
    const ristorante = location.state.ristorante;

    return (
        <>
            <MySingleResHeader ristorante={ristorante}/>
            <MyCarousel ristorante={ristorante}/>
            <MyMenu ristorante={ristorante}/>
            <MyComSec ristorante={ristorante}/>
        </>


    )
}
