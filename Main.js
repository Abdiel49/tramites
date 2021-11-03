import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from './components/nav/Navbar';
import Tramite from './components/tramites/TramiteCarrera';
import Procedure from './screens/procedure/Procedure';

export default function Main() {
  const info = require("./json/tramites.json");
  return (
    <View>
      <Tramite info={info[0]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});