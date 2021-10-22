import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../styles/colors';
import Checkbox from '../checkbox/Checkbox';

export default function Step2({ stepNumber }) {

  const [stepData, setStepData] = useState( false );
  const [checkStep, setCheckStep] = useState(false);

  return (
    <View style={ styles.stepContainer }>
      <View style={styles.stepNavbar}>
        <View style={styles.stepNavbar_info}>
          <Pressable
            onPress={ ()=> setStepData( !stepData )}
          >
            <Text style={styles.stepNumber}>{stepNumber}</Text>
            <Text style={styles.stepTitle}>
              Llenado de sus Datos Biográﬁcos.
            </Text>
          </Pressable>
        </View>
        <Checkbox value={checkStep} onCheck={() => setCheckStep(!checkStep)} />
      </View>
      {
        stepData && (
          <View>
            <Text style={styles.textBolt}>Descripcion:</Text>
            <Text>
            Con su código SIS Ingrese a la Página web http://websis.umss.edu.bo en la pestaña “Estudiantes” ingrese su login (código SIS) y su password (C.I.) y complete todos sus datos personales e información biográﬁca en la opción inferior derecha. Esta acción correctamente realizada, le habilita para la compra de matrícula, caso contrario no podrá continuar con el proceso.
            </Text>
          </View>
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  stepNavbar: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignContent: "center",
  },
  stepNavbar_info: {
    display: "flex",
    flex: 1,
    margin: 5,
    padding: 3,
  },
  stepNumber: {
    fontWeight: "bold",
  },
  stepTitle: {
    // flex:1,
    // flexWrap:'wrap',
    // flexShrink: 1,
  },
  stepName: {},
  stepDataContainer: {},
  textBolt: {
    fontWeight: "bold",
  },
  containerSimple: {
    marginTop: 5,
  },
  containerList: {
    display: "flex",
    flex: 1,
    marginLeft: 5,
  },
  testListItem: {
    marginVertical: 5,
  },
  textItalic: {
    fontStyle: 'italic'
  },
  rowTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  rowTitleText:{
    alignContent: "center",
    display: "flex",
    flex: 1,
    flexGrow: 1,
    margin: 5,
    padding: 3,
  }
});
