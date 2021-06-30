import React from "react";
import {MdPlace} from "react-icons/md"
import {FiPhone} from "react-icons/fi"
import {GiKnifeFork} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr"
import {AiOutlineClockCircle} from "react-icons/ai"
import {useSelector} from "react-redux";
import {Container, Row} from "react-bootstrap";
import MyRating from "./MyRating";

/*
export default function MySingleResHeader({index}) {
    const ristoranti = useSelector((state) => state.ristoranti);

    function IsOpen(ristoranti, index) {
        if (ristoranti[index].is_open == false) {
            return "Chiuso";
        } else if (ristoranti[index].is_open == true) {
            return "Aperto";
        }
    }


    
    let open = IsOpen(ristoranti, index);

    console.log(ristoranti[index]);
    console.log(index);

    //todo formattazzione grafica
    return (
        <Container fluid className={"bg-white"} id={"IntestazioneSingle-container"}>
            <Row className={"justify-content-left  intestazione"}>
                <h3 className={"align-self-end"}>{ristoranti[index].name}</h3>
            </Row>
            <Row className={"justify-content-left  intestazione"}>
                <MyRating score={ristoranti[index].rating}/>
                <a>{ristoranti[index].num_reviews}</a>
                <a> |{ristoranti[index].price_level}</a>
            </Row>
            <Row className={"justify-content-left  intestazione"}>
        <span>
        <a>
             <MdPlace/>
            {ristoranti[index].address_obj.city}{" "}
            {ristoranti[index].address_obj.country}{" "}
        </a>

        <a> | <FiPhone/> {ristoranti[index].phone}</a>
        <a> | <GrPersonalComputer/>  sito web</a>
        <a> | <GiKnifeFork/>  Menù </a>
        <a> | <AiOutlineClockCircle/> {open} </a>

        </span>
            </Row>
        </Container>
    );
}
*/

export default function MySingleResHeader({ristorante}) {


    function IsOpen(ristorante) {
        if (ristorante.is_open == false) {
            return "Chiuso";
        } else if (ristorante.is_open == true) {
            return "Aperto";
        }
    }


    let open = IsOpen(ristorante);

    return (
        <Container fluid className={"bg-white"} id={"IntestazioneSingle-container"}>
            <Row className={"justify-content-left  intestazione"}>
                <h3 className={"align-self-end"}>{ristorante.name}</h3>
            </Row>
            <Row className={"justify-content-left  intestazione"}>
                <MyRating score={ristorante.rating}/>
                <a>{ristorante.num_reviews}</a>
                <a> |{ristorante.price_level}</a>
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
        <a> | <AiOutlineClockCircle/> {open} </a>

        </span>
            </Row>
        </Container>
    );
}

