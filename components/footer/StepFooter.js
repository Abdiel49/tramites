import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function StepFooter() {
  return (
    <View style={ styles.footerContainer }>
      <Text style={ styles.textFooter }>Importante: Ud. estará inscrito correctamente si cumple TODOS los pasos en forma secuencial. Favor tome nota</Text>
      <Text style={ styles.textFooter }>Para obtener ésta y otra información ingrese a la página Web de la FCyT: www.fcyt.umss.edu.bo</Text>
      <View style={ styles.textFooterCenter } >
        <Text>Cochabamba, 27 de Julio de 2017</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal:5,
    padding: 5,
  },
  textFooter: {
    fontStyle:'italic',
    marginVertical:10,
  },
  textFooterCenter: {
    alignItems:'center',
    justifyContent:'center',
  }
})