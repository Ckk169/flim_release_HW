import React from 'react';

const Flim = ({flim}) => {

    return (
        <>
        <li>
            <a style ={{textDecoration: 'none'}} href={flim.url}>{flim.name}</a>
        </li>
        </>

    )
}

export default Flim;