import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import StepFooter from "../footer/StepFooter";
import Progress from "../progressBar/Progress";
import Step from "./Step";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { gStyles } from "../../styles/globalStyles";

export default function Procedure() {
  
  const initState = {
    step1:false,
    step2:false,
    step3:false,
    step4:false
  };
  
  const [tramitesStorage, setTramitesStorage] = useState( initState );
  // get data from asyngStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Tramites')
      if(value !== null) {
        return JSON.parse( value );
      }
      else return null;
    } catch(e) {
      console.error(e)
    }
  }
  // store data into asyngStorage
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@Tramites', jsonValue)
    } catch (e) {
      console.error( e )
    }
  };

  // load data when component is mounted
  useEffect(() => {
    async function loadData(){
      const data = await getData();
      if( !!data ){
        setTramitesStorage( data );
      } else {
        setTramitesStorage( initState )
      }
    }
    async function localDataExists(){
      let data = await getData();
      return !!data;
    } 
    if( localDataExists() ){
      loadData()
    }
  },[])

  // store data when some checkbox change
  useEffect(() => {
    storeData( tramitesStorage )
  }, [ tramitesStorage ])


  return (
    <View>
      <SafeAreaView style={ gStyles.safeAreaContainer }>
        
        <Progress 
          data={ tramitesStorage }
        />

        <ScrollView style={gStyles.scrollViewCont}>
          <Step 
            stepNumber="Paso 1"  
            value={ tramitesStorage.step1 } 
            onCheckStep={ ()=> setTramitesStorage({...tramitesStorage, step1: !tramitesStorage.step1 })} 
          />
          <Step2
            stepNumber="Paso 2" 
            value={ tramitesStorage.step2 } 
            onCheckStep={ ()=> setTramitesStorage({...tramitesStorage, step2: !tramitesStorage.step2 })} 
          />
          <Step3 
            stepNumber="Paso 3" 
            value={ tramitesStorage.step3 } 
            onCheckStep={ ()=> setTramitesStorage({...tramitesStorage, step3: !tramitesStorage.step3 })} 
          />
          <Step4 
            stepNumber="Paso 4" 
            value={ tramitesStorage.step4 } 
            onCheckStep={ ()=> setTramitesStorage({...tramitesStorage, step4: !tramitesStorage.step4 })} 
          />
          <StepFooter/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
