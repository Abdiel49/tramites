import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import Home from "../HomeScreen";
import axios from "axios";
import { networkEnv } from "../../../../network";
import { buscar } from "../buscar";

let tramites;

beforeAll(async () => {
  await axios.get(`${networkEnv}/api/tramites/umss`).then((res) => {
    tramites = res.data;
  });
});

describe('Testeando el buscador Buscador', () => {
    it('Buscar tramite Convalidacion de Materias', () => {
        const tramitesFilt = buscar('convalidacion de materias', tramites);
        expect(tramitesFilt.length).toBe(1);
        expect(tramitesFilt[0].titulo).toBe('Convalidación de Materias');
    });

    it('Buscar tramites con la palabra "certificado" en su titulo', () => {
        const tramitesFilt = buscar('certificado', tramites);
        const tramiteCertAcademico = tramitesFilt[0].titulo.toLowerCase();
        const tramiteCertEstudios = tramitesFilt[1].titulo.toLowerCase();
        expect(tramitesFilt.length).toBe(2);
        expect(tramiteCertAcademico.includes('certificado')).toBe(true);
        expect(tramiteCertEstudios.includes('certificado')).toBe(true);
    });

    it('Buscar en la descripcion de los tramites la palabra "manila" (Son 3 por ahora)', () => {
        const tramitesFilt = buscar('manila', tramites);
        const listaTramites = ['Cambio de Carrera','Estudio Simultaneo en Dos Carreras', 'Admisión Especial'];
        expect(tramitesFilt.length).toBe(3);
        expect(listaTramites.includes(tramitesFilt[0].titulo)).toBe(true);
        expect(listaTramites.includes(tramitesFilt[1].titulo)).toBe(true);
        expect(listaTramites.includes(tramitesFilt[2].titulo)).toBe(true);
    });

    it('Buscar un nombre de una entidad en los tramites "Seccion de Archivos"', () => {
        const tramitesFilt = buscar('seccion de archivos', tramites);
        expect(tramitesFilt.length).toBe(1);
        expect(tramitesFilt[0].titulo).toBe('Cambio de Carrera'); //Solo el tramite 'Cambio de Carrera' tiene
    });

    it('N Botones en Home debe ser igual a N tramites que "Buscar" devuelve ', async () => {
        const component = render(<Home />);
        await waitFor(() => {
            expect(component.getAllByTestId('btm-tramite').length).toBe(tramites.length);
        })

        //Escribir en el buscador 'manila' debe devolver 3 botones (tramites)
        await waitFor(() => {
            fireEvent.changeText(component.getByTestId('search-input'), 'manila');
            expect(component.getAllByTestId('btm-tramite').length).toBe(3);
        })

        //Quitar o dejar en blanco de nuevo el buscador debe devolver todos los tramites
        await waitFor(() => {
            fireEvent.changeText(component.getByTestId('search-input'), '');
            expect(component.getAllByTestId('btm-tramite').length).toBe(tramites.length);
        })
    });
});