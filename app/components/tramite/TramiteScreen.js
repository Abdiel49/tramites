import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { gStyles } from '../../styles/globalStyles';
import Progress from '../progressBar/Progress';
import Requisito from './Requisito';
import GoMapsButton from '../maps/GoMapsButton';
import tramiteStyle from './styles/tramiteItem';

const Tramite = ({ route, navigation }) => {
  const { tramite: info } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: info.titulo
    });
  }, []);

  const [ tramitesStorage, setTramitesStorage ] = useState([]);

  const generarChecks = () => {
    const listaChecks = [ info.requisitos.length ];
    for (let i = 0; i < info.requisitos.length; i++) {
      listaChecks[i] = false;
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

  useEffect(() => {
    async function loadData () {
      const data = await getData();
      setTramitesStorage(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    storeData(tramitesStorage);
  }, [ tramitesStorage ]);

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
          <Text style={{ fontWeight: 'bold' }}>Requisitos:</Text>
          {
            info.requisitos.map((req) => (
              <Requisito
                key={req.id}
                style={tramiteStyle.stepCont2}
                req={req.requisito}
                check={tramitesStorage[req.id]}
                mapData={req.mapData || {}}
                onChecked={() =>
                  setTramitesStorage({
                    ...tramitesStorage,
                    [req.id]: !tramitesStorage[req.id]
                  })
                }
              />
            ))}
          <View style={{ padding: 50 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Tramite;
