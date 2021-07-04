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
            <>
                <div>{commenti[0].name.substring(3)}</div>
                <div>{commenti[1].name.substring(3)}</div>
            </>
        )
    } else if (commenti[0] != undefined) {
        return (
            <div>{commenti[0].name.substring(3)}</div>

        )
    } else {
        return (
            <div>{ristorante.address_obj.city}</div>
        )
    }


}

export default MyCardComments;