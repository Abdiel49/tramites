import React from 'react';
import Tramite from "../Tramite";
import { render } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tramites = require('../../../assets/tramites.json');

beforeEach(async () => {
    await AsyncStorage.clear();
});

describe('Requisitos de los Tramites', () => {
    it('Requisitos del Tramite "Cambio de Carrera" son 6', () => {
        const { getAllByTestId } = render(<Tramite info={tramites[0]}/>);
        expect(getAllByTestId('req-test').length).toBe(6); 
    });

    it('Requisitos del Tramite "Certificado Académico" son 9', () => {
        const { getAllByTestId } = render(<Tramite info={tramites[1]}/>);
        expect(getAllByTestId('req-test').length).toBe(9); 
    });
});


