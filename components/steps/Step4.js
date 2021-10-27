import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../styles/colors';
import Checkbox from '../checkbox/Checkbox';
import SeeMore from '../seemore/SeeMore';

export default function Step4({ stepNumber }) {

  const [checkStep, setCheckStep] = useState(false);
  const [stepData, setStepData] = useState(false);
  const [listMat, setListMat] = useState(false);

  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepNavbar}>
        <View style={styles.stepNavbar_info}>
          <Pressable onPress={() => setStepData(!stepData)}>
            <Text style={styles.stepNumber}>{stepNumber}</Text>
            <Text style={styles.stepTitle}>Inscripción a sus materias por Internet.</Text>
            <SeeMore value={ stepData }/>
          </Pressable>
        </View>
        <Checkbox value={checkStep} onCheck={() => setCheckStep(!checkStep)} />
      </View>
      {stepData && (
        <View>
          <View>
            <Text style={styles.textBolt}>Descripcion:</Text>
            <Text>
            Página Web habilitada para las inscripciones por Internet: http://websis.umss.edu.bo (de 09:30 a 24:00.)
            </Text>
          </View>

          <View style={ styles.textSection }>
            <Text style={ styles.textBolt }>Días de inscripción: Según cronograma gestión 2-2017.</Text>
          </View>
          
          <View style={ styles.textSection }>
            <Text >Fechas: Se publicará estos días en la página de la facultad. http://www.fcyt.umss.edu.bo</Text>
          </View>

          <View style={ styles.textSection }>
            <Text >(Se recomienda a todos los estudiantes realizar su inscripción desde equipos conectados a la red universitaria dentro de la misma universidad)</Text>
          </View>
          
          <View style={ styles.textSection }>
            <Text>Las inscripciones se realizan por Internet en las fechas según cronograma. Esta forma de inscripción le ofrece al estudiante la opción de elegir sus materias, grupos y docentes. Los horarios por Carrera para la gestión 2-2017 están publicados en la página web de la facultad: http://www.fcyt.umss.edu.bo/horarios</Text>
          </View>
        </View>
      )}
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
    fontStyle: "italic",
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitleText: {
    alignContent: "center",
    display: "flex",
    flex: 1,
    flexGrow: 1,
    margin: 5,
    padding: 3,
  },
  finalTextList: {
    marginTop: 10,
  },
  textSection: {
    marginVertical: 10,
  },
});
