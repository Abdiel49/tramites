import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Checkbox from "../checkbox/Checkbox";
import SeeMore from "../seemore/SeeMore";
import { styles } from "./styles";

export default function Step3({ stepNumber }) {
  const [checkStep, setCheckStep] = useState(false);
  const [stepData, setStepData] = useState(false);
  const [listMat, setListMat] = useState(false);
  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepNavbar}>
        <View style={styles.stepNavbar_info}>
          <Pressable onPress={() => setStepData(!stepData)}>
            <Text style={styles.stepNumber}>{stepNumber}</Text>
            <Text style={styles.stepTitle}>Venta de Matrícula.</Text>
            <SeeMore value={ stepData }/>
          </Pressable>
        </View>
        <Checkbox value={checkStep} onCheck={() => setCheckStep(!checkStep)} />
      </View>
      {stepData && (
        <View>
          <View>
            <Text style={styles.textBolt}>Descripcion:</Text>
          </View>
          {/* subtitles */}

          <View style={styles.containerSimple}>
            <View style={styles.rowTitle}>
              <Pressable
                // onPress={() => setPosBol( !posBol )}
                // onPress={() => setSubTitle({ ...subTitle, posBol: !subTitle.posBol})}
                onPress={() => setListMat(!listMat)}
              >
                <Text style={styles.textBolt}>
                  La matrícula es válida para la gestión 2 / 2017
                </Text>
              </Pressable>
              <SeeMore value={listMat} />
            </View>
            {listMat && (
              <View style={styles.containerList}>
                <Text style={styles.testListItem}>
                  • Días de venta del aporte: Según Cronograma Gestión 2-2017.
                  Fechas: Se publicará estos días en la página de la facultad.
                  http://www.fcyt.umss.edu.bo
                </Text>
                <Text>
                  • Horario de atención: Continúo de 8:30 a.m. a 15:30 p.m.
                  Cajas de la Facultad
                </Text>

                {/* va depues de la lista */}
                <Text style={styles.finalTextList}>
                  Nota: La compra del Aporte Estudiantil es estrictamente
                  personal. No pierda el recibo de caja, porque contiene sus 5
                  códigos de acceso (PINs), imprescindibles para la inscripción.
                  Este recibo NO es un comprobante de Inscripción, solamente le
                  habilita para Inscribirse, la decisión de hacerlo o no depende
                  del estudiante (no se aceptarán reclamos posteriores por
                  olvido de inscripción, inscripción por terceras personas o
                  inscripción mal realizada).
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
