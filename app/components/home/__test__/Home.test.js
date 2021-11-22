import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../HomeScreen'


const info = require('../../../assets/tramites.json');

it('Se renderiza correctamente', () => {
    render(<Home />);
});

it('Un boton para cada tramite (3tramites 3botones)', () => {
    const elemento = render(<Home/>).toJSON();
    expect(elemento.children.length).toBe(info.length+1); //+1 Tramite de Inscripcion
});

it('Existencia de un boton con el titulo del tramite "Inscripcion a una Carrera"', () => {
    const { getAllByText } = render(<Home/>);
    expect(getAllByText('Inscripción a una Carrera').length).toBe(1);
});

it('Existencia de un boton con el titulo del tramite "Certificado de Estudios"', () => {
    const { getAllByText } = render(<Home/>);
    expect(getAllByText(info[0].titulo).length).toBe(1);  
 });

it('Existencia de un boton con el titulo del tramite "Cambio de Carrera"', () => {
   const { getAllByText } = render(<Home/>);
   expect(getAllByText(info[1].titulo).length).toBe(1);  
});