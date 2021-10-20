import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import Checkbox from '../checkbox/Checkbox'

export default function Step() {

  const [checkStep, setCheckStep] = useState(false)
  return (
    <View style={ styles.stepContainer }>
      <View style={styles.stepNavbar}>

        <View style={ styles.stepNavbar_info }>
          <Text style={ styles.stepNumber }>Paso 1 </Text>
          <Text style={ styles.stepTitle }>Presentar los siguientes documentos a partir del 27 de julio de 2017, en la Oficina de Registros (Edificio Multiacadémico planta baja) en el siguiente horario 08:30 a 12:00 o 14:30 a 18:00:</Text>
        </View>

        <Checkbox
          value={ checkStep }
          onCheck={ ()=> setCheckStep( !checkStep )}
        />
      </View>
      <View>
        <Text>Este es un pasito perron</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer:{
    backgroundColor: colors.grey,
    borderRadius:15,
    margin: 10,
    padding: 10,
  },
  stepNavbar: {
    display:'flex',
    flexDirection:'row',
    flexGrow:1,
    alignContent:'center',
  },
  stepNavbar_info:{
    display:'flex',
    flex:1,
    margin:5,
    padding:3,
  },
  stepNumber: {
    fontWeight:'bold'
  },
  stepTitle:{
    // flex:1,
    // flexWrap:'wrap',
    flexShrink: 1,
  },
  stepName: {

  },
  stepDataContainer: {

  }

})