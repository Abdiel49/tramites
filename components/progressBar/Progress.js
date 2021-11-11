import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import ProgressBar from "react-native-animated-progress";

export default function Progress({ data = {} }) {
  
  const [percent, setPercent] = useState( 0 );

  useEffect(() => {
    let items = 0;
    const dataKeysArr = Object.keys( data );
    if(dataKeysArr.length > 0){
      dataKeysArr.map( step => {
        if(data[step] === true) items++ 
      })
      const value = 100 / dataKeysArr.length;
      const per = items * value;
      setPercent( Math.round( per ) );
    } 
  }, [data]);

  return (
    <View style={ styles.container}>
      <View style={ styles.progress }>
        
        <Text style={ styles.textDone}>{ percent } %</Text>
        <View style={ styles.progressBar }>
          
          <ProgressBar 
            animated={ true }
            backgroundColor={ percent === 100? colors.green : colors.blue_dark } 
            height={ 8 } 
            progress={ percent } 
            trackColor={ colors.grey }
          />

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10,
    marginVertical:5,
  },
  progress:{
    // backgroundColor: colors.grey2,
    flexDirection:'row',
    borderRadius:10
  },
  textDone:{
    marginVertical:5,
    marginHorizontal:5,
  },
  progressBar:{
    flex:1,
    // alignContent: 'center'
    justifyContent: 'center'
  }
})