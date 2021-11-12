import React, { useContext } from 'react';
import Tramite from './Tramite';

const TramiteCertificado = () => {

    const datos = require('../../json/tramites.json')

    return(
        <Tramite 
            info={datos[1]} 
        />
    );

};

export default TramiteCertificado;