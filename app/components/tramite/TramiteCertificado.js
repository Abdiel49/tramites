import React from 'react';
import Tramite from './Tramite';

const TramiteCertificado = () => {

    const datos = require('../../assets/tramites.json')

    return(
        <Tramite 
            info={datos[1]} 
        />
    );

};

export default TramiteCertificado;