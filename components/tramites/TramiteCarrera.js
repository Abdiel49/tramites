import React from 'react';
import { View } from 'react-native';
import Tramite from './Tramite';

const TramiteCarrera = ({datos}) => {

    return(
        <Tramite 
            info={datos[0]}
        />
    );

};

export default TramiteCarrera;