import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tramite from "../TramiteScreen";

const tramites = require('../../../assets/tramites.json');

beforeEach(async () => {
    await AsyncStorage.clear();
});

describe('Requisitos de los Tramites', () => {

    const navigation = {
        setOptions: jest.fn(),
    }

    it('Requisitos del Tramite "Cambio de Carrera" son 6', async () => {
        const route = {
            params:{
                tramite: tramites[0],
            }
        };
        let componnet;
        const { getAllByTestId } = render(<Tramite route={route} navigation={ navigation }/>);
        await waitFor(()=>{
            expect(getAllByTestId('req-test').length).toBe(6); 
        })

    });

    it('Requisitos del Tramite "Certificado Académico" son 9', async() => {
        const route = {
            params:{
                tramite: tramites[1],
            }
        };
        const { getAllByTestId } = render(<Tramite route={route} navigation={ navigation }/>);
        await waitFor(()=>{
            expect(getAllByTestId('req-test').length).toBe(9); 
        })
    });
});


