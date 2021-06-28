import React from 'react'
import MySingleResHeader from './MySingleResHeader'
import MyCarousel from './MyCarousel'
import { useLocation } from 'react-router';
import MyMenu from './MyMenu';



//Ho usato useLocation (passando un oggetto al Link del child) per avere il value su questo file


export default function MySingleResaturant() {
const location = useLocation();
const index = location.state.i 

console.log(index)
    return (
        <div>
            <MySingleResHeader index= {index}/>
            <MyCarousel index= {index}/>
            <MyMenu index={index}/>
        </div>
    )
}
