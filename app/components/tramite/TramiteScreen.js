import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { gStyles } from "../../styles/globalStyles";
import Progress from "../progressBar/Progress";
import Requisito from "./Requisito";
import GoMapsButton from "../maps/GoMapsButton";
import tramiteStyle from "./styles/tramiteItem";
import { getLocalData, storeLocalData } from "../../services/localStorage";

const Tramite = ({ route, navigation }) => {
  const { tramite: info } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: info.titulo,
      headerRight:''
    });

  }, []);

  const [tramitesStorage, setTramitesStorage] = useState([]);
  const [procedureStored, setProcedureStored] = useState(false)

  const generarChecks = () => {
    let listaChecks = [];
    for (let i = 0; i < info.datos.length; i++) {
      let dato = info.datos[i];
      for (let j = 0; j < dato.contenido.length; j++) {
        listaChecks.push(false);
      }
    }

    return listaChecks;
  };

  const tramiteChecks = info.nombre;
  const { mapData } = info;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(tramiteChecks);
      if (value !== null) {
        return JSON.parse(value);
      } else {
        return generarChecks();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(tramiteChecks, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const someProcedureChecked = () => {
    const keys = Object.keys(tramitesStorage);
    const somechecked = keys.find(item => tramitesStorage[item] == true) || false;
 
    if( somechecked ){
      storeProcedure()
    }
  }

  const storeProcedure = async () => {
    if(!procedureStored){
      if(someProcedureChecked){
        try {
          const key = 'my-procedures';
          const myProcedures = await getLocalData( key );
          const value = {
            ...myProcedures,
            [info.nombre]: info
          }
          await storeLocalData(key, value);
          setProcedureStored(true);
        } catch (e) {
          console.error(e)
        }

      }
    }
  }

  useEffect(() => {
    async function loadData() {
      let data = await getData();
      setTramitesStorage(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    storeData(tramitesStorage);
    someProcedureChecked();
  }, [tramitesStorage]);

  return (
    <View>
      <SafeAreaView style={gStyles.safeAreaContainer}>
        <View>
          <Progress data={tramitesStorage} />
        </View>

        <ScrollView style={tramiteStyle.scrollViewCont}>
          <View style={tramiteStyle.stepCont}>
            <Text style={tramiteStyle.stepDesc}>{info.descripcion}</Text>
            {
              !!mapData?.haveLocation && <GoMapsButton data={mapData} />
            }
          </View>
          {
            info.datos.map((cont) => (
              <View key={cont.id}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{cont.nombreCont}</Text>
                {
                  (cont.contenido.map((sub) => (
                    <Requisito
                      key={sub.id}
                      style={tramiteStyle.stepCont2}
                      req={sub.subCont}
                      check={tramitesStorage[sub.id]}
                      mapData={sub.mapData || {}}
                      onChecked={() =>
                        setTramitesStorage({
                          ...tramitesStorage,
                          [sub.id]: !tramitesStorage[sub.id],
                        })
                      }
                      title={info.titulo}
                    />
                  )))
                }
              </View>
            ))
          }
          <View style={{ padding: 50 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Tramite;
