import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import axios from "axios";
import { networkEnv } from "../../../network";
import LupaIcon from "./LupaIcon";

const Home = ({ navigation }) => {
  const [tramites, setTramites] = useState(null);
  const [apiBase, setApiBase] = useState(networkEnv);
  const [textoBuscador, setTextoBuscador] = useState('');
  const [tramitesFilt, setTramitesFilt] = useState(null);

  useEffect(() => {
    let isApiSubscribed = true;
    axios
      .get(`${apiBase}/api/tramites/umss`)
      .then((res) => {
        if (isApiSubscribed) {
          setTramites(res.data);
          setTramitesFilt(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      isApiSubscribed = false;
    };
  }, [apiBase]);

  const quitarTildes = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  const buscar = () => {
    if (textoBuscador != '') {
      const textoLimpio = quitarTildes(textoBuscador.toLowerCase());

      const resulBusq = tramites.filter((tramite) => {
        let cumple = false
        const nombreTramite = quitarTildes(tramite.titulo.toLowerCase());
        const descTramite = quitarTildes(tramite.descripcion.toLowerCase());
        let nombUbicacion = null;
        let nombUbicacionReq = [];
  
        if (tramite.mapData) {
          nombUbicacion = quitarTildes(tramite.mapData.locationTitle.toLowerCase());
        }
  
        tramite.requisitos.forEach(requisito => {
          if (requisito.mapData) {
            nombUbicacionReq.push(quitarTildes(requisito.mapData.locationTitle.toLowerCase()));
          }
        });
  
        if (nombreTramite.includes(textoLimpio)
            || descTramite.includes(textoLimpio)) {
              cumple = true;
        } else if (nombUbicacion){
          if (nombUbicacion.includes(textoLimpio)) {
            cumple = true;
          }
        }
        
        if (nombUbicacionReq.length > 0){
          nombUbicacionReq.forEach(ubicEnReq => {
            if (ubicEnReq.includes(textoLimpio)) {
              cumple = true;
            }
          });
        }
  
        return cumple;
      })
      setTramitesFilt(resulBusq);
    }
  };

  useEffect(() => {
    if (textoBuscador == '') {
      setTramitesFilt(tramites);
    } else {
      buscar();
    }
  }, [textoBuscador])

  return (
    <View>
      <View style={styles.contBuscador}>
        <TextInput
          style={styles.buscador}
          onChangeText={setTextoBuscador}
          value={textoBuscador}
          placeholder="Buscar"
        />
        <TouchableOpacity
          style={styles.sCbuttonStyle}
          onPress={() => buscar()}
        >
          <LupaIcon/>                 
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity
          testID="btm-tramite"
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("tramiteInscripcion")}
        >
          <Text style={styles.texteStyle}>Inscripción a una Carrera</Text>
        </TouchableOpacity>
        {
          (tramitesFilt)?
          ( 
            tramitesFilt.length > 0?(
              tramitesFilt.map((tramite) => (
                <TouchableOpacity
                  testID="btm-tramite"
                  key={tramite.id}
                  style={styles.buttonStyle}
                  onPress={() =>
                    navigation.navigate("tramite", {
                      tramite,
                    })
                  }
                >
                  <Text style={styles.texteStyle}>{tramite.titulo}</Text>
                </TouchableOpacity>
              ))
            )
            :
            <Text style={styles.textoInfo}>
              No se encontró algún tramite con la información que buscas
            </Text>
          )  
          :
          (
          <Text style={styles.textoInfo}>
            Cargando...
          </Text>
          )
        }
      <View style={styles.espaciado}>

      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#0F354A",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 10,
  },

  sCbuttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: "#0F354A",
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    marginTop: 5
  },

  texteStyle: {
    color: "white",
    fontSize: 17,
  },

  buscador: {
    marginVertical: 10,
    marginRight: 10,
    width: '75%',
    height: 45,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 10,
    fontSize: 16,
    flexDirection: 'column'
  },

  espaciado: {
    padding: 50
  },

  contBuscador: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  lupaIcon: {
    width: '100%',
    height: '100%'
  },

  textoInfo: {
    fontSize: 30,
    marginVertical: '30%',
    marginHorizontal: 20,
    textAlign: 'center'
  }
});

export default Home;
