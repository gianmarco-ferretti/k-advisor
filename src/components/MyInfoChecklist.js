import React from 'react';
import {useDispatch} from "react-redux";
import {removeAllFilter, removeAllSearch} from "../actions";

function MyInfoChecklist({props}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeAllFilter())
        dispatch(removeAllSearch())
    }

    return (
        <div className={'mt-5'}>
            <span className={'mr-3'}><strong>{props}</strong> risultati corrispondono ai criteri di ricerca</span>
            <label className={'font-weight-bold text-body'} onClick={handleClick}>Cancella
                tutti i filtri</label>
        </div>
    );
}

export default MyInfoChecklist;