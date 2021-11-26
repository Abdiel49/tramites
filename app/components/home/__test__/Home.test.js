import React, { useState } from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Home from '../HomeScreen';
import axios from 'axios';

let tramites;
beforeAll(async () => {
    await axios.get('http://localhost:3000/api/tramites/umss')
    .then((res) => {
        tramites = res.data;
    });
});

it('Se renderiza correctamente', async () => {
    await waitFor(()=>{
        render(<Home />);        
    })
});

it('Un boton para cada tramite (3tramites 3botones)',async () => {  
    const elemento = render(<Home/>);

    await waitFor(()=>{
        let elem = elemento.toJSON();
        expect(elem.children.length).toBe(tramites.length+1); //+1 Tramite de Inscripcion   
    })
});

it('Existencia de un boton con el titulo del tramite "Inscripcion a una Carrera"', async () => {
    const { getAllByText } = render(<Home/>);

    await waitFor(()=>{
        expect(getAllByText('Inscripción a una Carrera').length).toBe(1);       
    })
});

it('Existencia de un boton con el titulo del tramite "Certificado de Estudios"', async () => {
    const { getAllByText } = render(<Home/>);

    await waitFor(()=>{
        expect(getAllByText(tramites[0].titulo).length).toBe(1);   
    })
 });

it('Existencia de un boton con el titulo del tramite "Cambio de Carrera"', async () => {
   const { getAllByText } = render(<Home/>);

   await waitFor(()=>{
     expect(getAllByText(tramites[1].titulo).length).toBe(1);        
   })
});
