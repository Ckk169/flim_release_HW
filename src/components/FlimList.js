import React from 'react';
import Flim from './Flim';

const FlimList = ({ flims }) => {

    const flimNodes = flims.map((flim) => {
        return (
            <Flim flim={flim} key={flim.id}></Flim>
        )

    });


    return (
        <>
            <ul>
                {flimNodes}
            </ul>
        </>
    )


}

export default FlimList;