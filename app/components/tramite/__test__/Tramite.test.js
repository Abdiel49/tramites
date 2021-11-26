import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tramite from "../TramiteScreen";
import axios from 'axios';

let tramites;

beforeEach(async () => {
    await AsyncStorage.clear();
});


beforeAll(async () => {
    await axios.get('http://localhost:3000/api/tramites/umss')
    .then((res) => {
        tramites = res.data;
    });
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


