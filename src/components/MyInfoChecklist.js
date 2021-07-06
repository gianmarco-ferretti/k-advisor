import React from 'react';
import {useDispatch} from "react-redux";
import {removeAllFilter} from "../actions";

function MyInfoChecklist(props) {

    const dispatch = useDispatch();


    return (
        <div className={'mt-5'}>
            <span className={'mr-3'}><strong>{props.props}</strong> risultati corrispondono ai criteri di ricerca</span>
            <label className={'font-weight-bold text-body'} onClick={() => dispatch(removeAllFilter())}>Cancella
                tutti i filtri</label>
        </div>
    );
}

export default MyInfoChecklist;