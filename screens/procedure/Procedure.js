import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import StepFooter from "../../components/footer/StepFooter";
import Navbar from "../../components/nav/Navbar";
import Step from "../../components/steps/Step";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import Step4 from "../../components/steps/Step4";
import { gStyles } from "../../styles/gStyles";
import Progress from "../../components/progressBar/Progress";

export default function Procedure() {
  
  // console.log("navigator from procedure", navigator.setOptions)
  
  const [tramitesStorage, setTramitesStorage] = useState( {
    step1:false,
    step2:false,
    step3:false,
    step4:false
  } )
  // get data from asyngStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Tramites')
      if(value !== null) {
        return JSON.parse( value );
      }
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
      let data = await getData();
      setTramitesStorage( data )
    }
    if( !tramitesStorage ){
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
        {/* <Navbar title="Inscripcion a una carrera" /> */}
        
        <Progress 
          data={ tramitesStorage }
        />

        <ScrollView>
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
