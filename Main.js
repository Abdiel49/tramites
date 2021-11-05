import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from './components/tramites/Home';
import Tramite from './components/tramites/Tramite';
import TramiteCarrera from './components/tramites/TramiteCarrera';
import TramiteCertificado from './components/tramites/TramiteCertificado';
import Procedure from './screens/procedure/Procedure';

const Stack = createStackNavigator();
const datos = require('./json/tramites.json');


export default function Main() {
  return (
    <TramiteCertificado datos={datos}></TramiteCertificado>
    //<TramiteCarrera datos={datos}></TramiteCarrera>
  )
}
