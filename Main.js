import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { createContext } from 'react'
import TramiteCarrera from './components/tramites/TramiteCarrera';
import TramiteCertificado from './components/tramites/TramiteCertificado';
import Root from './router/Root';
import Procedure from './screens/procedure/Procedure';

const Stack = createStackNavigator();

export const DatosContext = createContext();

export default function Main() {
  const cargaDatos = require('./json/tramites.json');
  return (
    <DatosContext.Provider value={cargaDatos}>
      <Root/>
    </DatosContext.Provider>
  )
}
