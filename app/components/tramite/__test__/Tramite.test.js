import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tramite from "../TramiteScreen";
import axios from "axios";
import { networkEnv } from "../../../../network";

let tramites;
let mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

beforeEach(async () => {
  await AsyncStorage.clear();
  mockedNavigate = jest.fn();
});

beforeAll(async () => {
  await axios.get(`${networkEnv}/api/tramites/umss`).then((res) => {
    tramites = res.data;
  });
});

describe("Requisitos de los Tramites", () => {
  const navigation = {
    setOptions: jest.fn(),
    navigate: mockedNavigate(),
  };

  it('Requisitos del Tramite "Cambio de Carrera" son 6', async () => {
    const route = {
      params: {
        tramite: tramites[0],
      },
    };
    const { getAllByTestId } = render(
      <Tramite route={route} navigation={navigation} />
    );
    await waitFor(() => {
      expect(getAllByTestId("req-test").length).toBe(6);
    });
  });

  it('Requisitos del Tramite "Certificado Académico" son 9', async () => {
    const route = {
      params: {
        tramite: tramites[1],
      },
    };
    const { getAllByTestId } = render(
      <Tramite route={route} navigation={navigation} />
    );
    await waitFor(() => {
      expect(getAllByTestId("req-test").length).toBe(9);
    });
  });
});
