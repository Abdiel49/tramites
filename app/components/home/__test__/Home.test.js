import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Home from "../HomeScreen";
import axios from "axios";
import { networkEnv } from "../../../../network";

let tramites;

beforeAll(async () => {
  await axios.get(`${networkEnv}/api/tramites/umss`).then((res) => {
    tramites = res.data;
  });
});

describe("Pruebas en HomeScreen", () => {
  it("Se renderiza correctamente", () => {
    render(<Home />);
  });

  it("Un boton para cada tramite (3tramites 3botones)", async () => {
    const { getAllByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getAllByTestId('btm-tramite').length).toBe(tramites.length);
    });
  });

  it('Existencia de un boton con el titulo del tramite "Certificado de Estudios"', async () => {
    const { getAllByText } = render(<Home />);

    await waitFor(() => {
      expect(getAllByText(tramites[0].titulo).length).toBe(1);
    });
  });

  it('Existencia de un boton con el titulo del tramite "Cambio de Carrera"', async () => {
    const { getAllByText } = render(<Home />);

    await waitFor(() => {
      expect(getAllByText(tramites[1].titulo).length).toBe(1);
    });
  });
});
