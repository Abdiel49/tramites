import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import tramiteStyle from '../../styles/tramiteStyle';
import Checkbox from '../checkbox/Checkbox';
import SeeMore from '../seemore/SeeMore';
import { styles } from './styles';

export default function Step2({ stepNumber, value, onCheckStep }) {

  const [stepData, setStepData] = useState( false );

  return (
    <View style={ tramiteStyle.stepCont }>
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
          <SeeMore 
            value={ stepData }
            onPress={ ()=> setStepData( !stepData )}
          />
        </View>
        <Checkbox 
          value={ value } 
          onCheck={() => onCheckStep() } 
        />
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
