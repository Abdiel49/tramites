import React from 'react';
import Tramite from './Tramite';

const TramiteCertificado = ({datos}) => {

    return(
        <Tramite 
            info={datos[1]} 
        />
    );

};

export default TramiteCertificado;