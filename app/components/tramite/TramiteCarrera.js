import React from 'react';
import Tramite from './Tramite';

const TramiteCarrera = () => {

    const datos = require('../../assets/tramites.json')

    return(
        <Tramite 
            info={datos[0]}
        />
    );

};

export default TramiteCarrera;