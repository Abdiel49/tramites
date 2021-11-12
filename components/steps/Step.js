import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tramiteStyle from "../../styles/tramiteStyle";
import Checkbox from "../checkbox/Checkbox";
import SeeMore from "../seemore/SeeMore";
import { styles } from "./styles";

export default function Step({ stepNumber, value, onCheckStep }) {
  
  const [stepData, setStepData] = useState(false);

  const [subTitle, setSubTitle] = useState({
    posBol: false,
    posExtran: false,
    posExtranBol: false,
  });

  const { posBol, posExtran, posExtranBol } = subTitle;

  const handleSubtitle = (key) => {
    let aux = subTitle[key];
    setSubTitle({
      ...subTitle,
      [key]: !aux,
    });
  };

  return (
    <View style={tramiteStyle.stepCont}>
      <View style={styles.stepNavbar}>
        <View style={styles.stepNavbar_info}>
          <Pressable
            onPress={()=> setStepData( !stepData )}
          >
            <Text style={styles.stepNumber}>{stepNumber}</Text>
            <Text style={styles.stepTitle}>
              Presentar los siguientes documentos a partir del 27 de julio de
              2017, en la Oficina de Registros (Edificio Multiacadémico planta
              baja) en el siguiente horario 08:30 a 12:00 o 14:30 a 18:00:
            </Text>
          </Pressable>
          <SeeMore 
            value={ stepData } 
            onPress={()=> setStepData( !stepData )}
          />
        </View>

        <Checkbox value={ value } onCheck={() => onCheckStep() } />
      </View>
      {stepData && (
        <View>
          <Text style={styles.textBolt}>Descripcion:</Text>
          <Text>
            Número de Ventanillas: 5 y 6 {"\n"}Los postulantes que aprobaron
            EXAMEN DE INGRESO, PRIMERA y SEGUNDA OPCIÓN:
          </Text>

          {/* subtitles */}
          <View style={styles.containerSimple}>
            <View style={styles.rowTitle}>
              <Pressable
                onPress={() => handleSubtitle("posBol")}
              >
                <Text style={styles.textBolt}>
                  POSTULANTE NACIONAL (BOLIVIANO)
                </Text>
              </Pressable>
              <SeeMore 
                value={posBol} 
                onPress={() => handleSubtitle("posBol")}
              />
            </View>
            {posBol && (
              <View style={styles.containerList}>
                <Text style={styles.testListItem}>
                  • Diploma de bachiller (Fotocopia legalizada). La legalización
                  debe realizarse en “SEDUCA” para los diplomas emitidos por
                  esta dirección desde el año 2009 o en “ARCHIVOS UMSS” para los
                  diplomas emitidos por la UMSS hasta el año 2008.
                </Text>
                <Text>
                  • En caso de no tener Diploma de Bachiller: (Libreta de 6to.
                  de secundaria, fotocopia legalizada en la Oficina de Archivos
                  de la UMSS o comprobante que indique el trámite en proceso,
                  solo para los bachilleres del 2016).
                </Text>
                <Text style={styles.testListItem}>
                  • Fotocopia nítida legalizada de la cédula de Identidad
                  anverso y reverso (legalizar en la Oﬁcina de Archivos, previa
                  compra de timbres en Caja de la UMSS).
                </Text>
                <Text style={styles.testListItem}>
                  • Fotocopia nítida legalizada del Certiﬁcado de Nacimiento
                  (legalizar en la Oﬁcina de Archivos, previa compra de timbres
                  en Caja de la UMSS).
                </Text>
                <Text style={styles.testListItem}>
                  • Dos (2) fotografías 4 x 5 fondo azul o rojo, para apertura
                  de kardex Académico.
                </Text>
                {/* va depues de la lista */}
                <Text>
                  Todo lo anterior en sobre manila tamaño oﬁcio rotulado
                  (apellido paterno, materno, nombres, carrera y gestión) en
                  caso de cambiarse de carrera debe informar al funcionario de
                  registros en forma verbal y rotular el sobre con el cambio
                  mencionado.
                </Text>
              </View>
            )}
          </View>

          <View style={styles.containerSimple}>
            <View style={styles.rowTitle}>
              <Pressable 
                onPress={() => handleSubtitle("posExtran")}
              >
                <Text style={styles.textBolt}>POSTULANTE EXTRANJERO</Text>
              </Pressable>
              <SeeMore 
                value={posExtran}
                onPress={() => handleSubtitle("posExtran")} 
              />
            </View>
            {/* text subtitle info */}
            {posExtran && (
              <View>
                <Text>
                  Todos los siguientes documentos deben ser legalizados por el
                  Consulado Boliviano en el país de origen del estudiante
                  extranjero. Además legalizados por la Cancillería o Ministerio
                  de relaciones exte- riores de Bolivia.
                </Text>
                {/* list info */}
                <View style={styles.containerList}>
                  <Text style={styles.testListItem}>
                    • Certiﬁcado de estudios, o enseñanza medio, o bachillerato.
                  </Text>
                  <Text>• Certiﬁcado de Nacimiento original.</Text>
                  <Text style={styles.testListItem}>
                    • Certiﬁcado de salud o médico.
                  </Text>
                  <Text style={styles.testListItem}>
                    • Certiﬁcado de antecedentes policiales.
                  </Text>
                  <Text style={styles.testListItem}>
                    • Pasaporte con visa consular de estudiante.
                  </Text>
                  <Text style={styles.testListItem}>
                    • Dos (2) fotografías 4 x 5 fondo azul o rojo, para apertura
                    de kardex Académico.
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.containerSimple}>
            <View style={styles.rowTitle}>
              <View styles={styles.rowTitleText}>
                <Pressable 
                  onPress={() => handleSubtitle("posExtranBol")}
                >
                  <Text style={styles.textBolt}>
                    POSTULANTE EXTRANJERO DE PADRES BOLIVIANOS
                  </Text>
                </Pressable>
              </View>
              <SeeMore 
                value={posExtranBol} 
                onPress={() => handleSubtitle("posExtranBol")}
              />
            </View>
            {/* text subtitle info */}
            {posExtranBol && (
              <View>
                <Text>
                  Todos los estudiantes que no hayan realizado el trámite de
                  Nacionalización boliviana, deben presentar los siguientes
                  documentos:
                </Text>
                {/* list info */}
                <View style={styles.containerList}>
                  <Text style={styles.testListItem}>
                    • Diploma de bachiller legalizado por el Consulado y
                    Cancillería.
                  </Text>
                  <Text>
                    • Certiﬁcado de Nacimiento legalizado por el Consulado y
                    Cancillería.
                  </Text>
                  <Text style={styles.testListItem}>
                    • Cedula de Identidad original, y fotocopia de la Cedula de
                    identidad del Papá y/o mamá, si son bolivianos.
                  </Text>
                  <Text style={styles.testListItem}>
                    • Dos (2) fotografías 4 x 5 fondo azul o rojo, para apertura
                    de kardex Académico. Todo lo anterior en sobre manila tamaño
                    oﬁcio sin rotular.
                  </Text>
                  {/* information italic - frase o comentario final */}
                  <Text style={styles.textItalic}>
                    Si la presentación de documentos es satisfactoria se le
                    proporcionará al estudiante su Código SIS.
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
