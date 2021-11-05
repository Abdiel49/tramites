import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../nav/Navbar';
import Requisito from './Requisito';

const Tramite = ({info}) => {
    const [tramitesStorage, setTramitesStorage] = useState([]);

    const generarChecks = () => {
        let listaChecks = [info.requisitos.length]
       for(let i = 0; i < info.requisitos.length; i++){
            listaChecks[i] = false;
        }
        return listaChecks; 
    }
    

    const tramiteChecks = info.nombre;


    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem(tramiteChecks)
          if(value !== null) {
            return JSON.parse( value );
          } else {
            return generarChecks();
          }
        } catch(e) {
          console.error(e)
        }
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(tramiteChecks, jsonValue)
        } catch (e) {
          console.error( e )
        }
    };
    
    useEffect(() => {
        async function loadData(){
            let data = await getData();
            setTramitesStorage( data )
        }
        loadData()
    },[])

    useEffect(() => {
        storeData( tramitesStorage )
      }, [ tramitesStorage ])

    
    
    return(
        <View>
            <SafeAreaView style={{backgroundColor: "snow"}}>
                <ScrollView>
                <Navbar title={info.titulo}/>
                    <Text style={ estilos.conttexto }>
                        {info.descripcion}
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>Requisitos:</Text>
                        {
                        info.requisitos.map(req => (
                            <Requisito
                                key={req.id}
                                style={ estilos.conttexto }
                                req={ req.requisito }
                                check={ tramitesStorage[req.id] }
                                onChecked={ () => setTramitesStorage({...tramitesStorage, [req.id]: !tramitesStorage[req.id]}) }
                            />
                        ))
                        }
                </ScrollView>
            </SafeAreaView>            
        </View>
    );
    
};

const estilos = StyleSheet.create({
    conttexto: {
        position: 'relative',
        backgroundColor: '#F1F1F1',
        color: 'black',
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRightColor: 'rgba(181,181,181,0.5)',
        borderBottomColor: 'rgba(181,181,181,0.5)',
        borderRadius: 20,
        fontSize: 15
    }
});

export default Tramite;