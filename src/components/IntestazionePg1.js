import React from 'react'
import {Card} from 'react-bootstrap'

export default function IntestazionePg1() {
    return (
        <Card>
            <div className='IntText'>
                <div id='NomRistorante'>
                    <h3>Nome Ristorante</h3>
                </div>
                <div id='NRecensioni'>
                    <a>num recensioni|prezzo</a>
                </div>
                <div id='Contatti'>
                    <a>indirizzo|telefono|sito Web|menu|aperto</a>
                </div>
            </div>
        </Card>
    )
}
