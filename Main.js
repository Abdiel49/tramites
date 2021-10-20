import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from './components/nav/Navbar';
import Procedure from './screens/procedure/Procedure';

export default function Main() {
  return (
    <View>
      {/* <Navbar/> */}
      <Procedure/>
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