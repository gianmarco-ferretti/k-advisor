import React, {useEffect, useState} from 'react';
import axios from "axios";

function MyCardComments({ristorante}) {
    /*TODO GIANMARCO: provare a metterli nel redux store correttamente*/

    let [commenti, setCommenti] = useState({commmenti: []});

    useEffect(() => {
        axios.get(ristorante.reviews_endpoint).then(response => setCommenti(response.data))
    }, [])

    if (commenti[0] != undefined && commenti[1] != undefined) {
        return (
            <span className={'text-black-50 font-weight-bold'}>
                <div>"{commenti[0].name.substring(3)} "</div>
                <div>"{commenti[1].name.substring(3)} "</div>
            </span>
        )
    } else if (commenti[0] != undefined) {
        return (
            <span className={'text-black-50 font-weight-bold'}>
                <div>"{commenti[0].name.substring(3)} "</div>
            </span>
        )
    } else {
        return (
            <span className={'text-black-50 font-weight-bold'}>
                <div>{ristorante.address_obj.city}</div>
            </span>
        )
    }


}

export default MyCardComments;