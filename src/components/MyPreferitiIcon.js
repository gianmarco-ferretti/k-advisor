import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/all";
import {addRistorante, removeRistorante} from "../actions";
import {useDispatch, useSelector} from "react-redux";

function MyPreferitiIcon({ristorante}) {
    const dispatch = useDispatch();
    const rPreferiti = useSelector(state => state.ristorantiPreferiti)

    return (
        <>
            {(rPreferiti.includes(ristorante)) ?
                <FaHeart className={'btn-preferiti-red'} size={20}
                         onClick={() => dispatch(removeRistorante(ristorante))}/>
                :
                <FaRegHeart className={'btn-preferiti'} size={30} onClick={() => dispatch(addRistorante(ristorante))}/>
            }
        </>

    );
}

export default MyPreferitiIcon;