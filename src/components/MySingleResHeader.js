import React from "react";
import {MdPlace} from "react-icons/md"
import {FiPhone} from "react-icons/fi"
import {GiKnifeFork} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr"
import {AiOutlineClockCircle} from "react-icons/ai"

import {Container, Row} from "react-bootstrap";
import MyRating from "./MyRating";


export default function MySingleResHeader({ristorante}) {

    /*TODO migliorare resa grafica, prendere spunto da MyCard*/
    return (
        <Container fluid className={"bg-white"} id={"IntestazioneSingle-container"}>
            <Row className={"justify-content-left  intestazione"}>
                <h3 className={"align-self-end"}>{ristorante.name}</h3>
            </Row>
            <Row className={"justify-content-left  intestazione"}>
                <MyRating score={ristorante.rating}/>
                <a>{ristorante.num_reviews}</a>
                <a> |{ristorante.price_level.replaceAll("$", "€")}</a>
            </Row>
            <Row className={"justify-content-left  intestazione"}>
        <span>
        <a>
             <MdPlace/>
            {ristorante.address_obj.city}{" "}
            {ristorante.address_obj.country}{" "}
        </a>
        <a> | <FiPhone/> {ristorante.phone}</a>
        <a> | <GrPersonalComputer/>  sito web</a>
        <a> | <GiKnifeFork/>  Menù </a>
            {(ristorante.is_open) ?
                <a> | <AiOutlineClockCircle/><span className={'text-black font-weight-bold'}> Aperto Ora</span></a>
                :
                <a> | <AiOutlineClockCircle/><span
                    className={'text-danger font-weight-bold'}> Oggi Chiuso</span></a>}
        </span>
            </Row>
        </Container>
    );
}

