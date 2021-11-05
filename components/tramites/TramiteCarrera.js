import React, { useContext } from 'react';
import Tramite from './Tramite';

const TramiteCarrera = () => {

    const datos = require('../../json/tramites.json')

    return(
        <Tramite 
            info={datos[0]}
        />
    );

};

export default TramiteCarrera;