import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Checkbox from '../checkbox/Checkbox';
import SeeMore from '../seemore/SeeMore';
import { styles } from './styles';

export default function Step4({ stepNumber, value, onCheckStep }) {

  const [stepData, setStepData] = useState(false);

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
        <Checkbox value={ value } onCheck={ onCheckStep } />
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
