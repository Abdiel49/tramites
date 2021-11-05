import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Root from './router/Root';
import Procedure from './screens/procedure/Procedure';

const Stack = createStackNavigator();
const datos = require('./json/tramites.json');


export default function Main() {
  return (
    <Root/>
  )
}
