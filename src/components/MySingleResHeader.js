import React from "react";
import {MdPlace} from "react-icons/md"
import {FiPhone} from "react-icons/fi"
import {GiKnifeFork} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr"
import {AiOutlineClockCircle} from "react-icons/ai"

import {Container, Row} from "react-bootstrap";
import MyRating from "./MyRating";
import {useDispatch, useSelector} from "react-redux";
import {FaHeart, FaRegHeart} from "react-icons/all";
import {addRistorante, removeRistorante} from "../actions";


export default function MySingleResHeader({ristorante}) {
    const dispatch = useDispatch();
    const rPreferiti = useSelector(state => state.ristorantiPreferiti)

    /*TODO migliorare resa grafica, prendere spunto da MyCard*/
    return (
        <Container fluid className={"bg-white"} id={"IntestazioneSingle-container"}>
            <Row className={"justify-content-left  intestazione"}>
                <h3 className={"align-self-end"}>{ristorante.name}</h3>
                {(rPreferiti.includes(ristorante)) ?

                    <FaHeart className={'my-btn-info-red mt-2'} size={20}
                             onClick={() => dispatch(removeRistorante(ristorante))} />
                    :
                    <div className={'my-btn-info mt-2'}>
                    <FaRegHeart  size={20} onClick={() => dispatch(addRistorante(ristorante))}/>
                        <span className={'pl-2 text-body'}>Salva</span>
                    </div>
                }
            </Row>
            <Row className={"justify-content-left"}>
                <MyRating score={ristorante.rating}/>
                <a>{ristorante.num_reviews}</a>
                <a> |{ristorante.price_level.replaceAll("$", "€")}</a>
            </Row>
            <Row className={"justify-content-left"}>
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

