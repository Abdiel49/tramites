import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProgressBar from "react-native-animated-progress";
import { colors } from '../../styles/colors';

export default function Progress({ 
  data = {}, 
  textWhite = false,
  isBgDark = false,
}) {
  
  const [percent, setPercent] = useState( 0 );
  const [progressColor, setProgressColor] = useState(colors.blue_dark)

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

  useEffect(() => {
    if (percent === 100){
      setProgressColor( isBgDark ? colors.dark : colors.green );
    }else {
      setProgressColor( isBgDark ? colors.secondary : colors.blue_dark );
    }
  }, [ isBgDark, percent ])

  return (
    <View style={ styles.container }>
      <View style={ styles.progress }>
        
        <Text 
          style={[ styles.textDone, textWhite && styles.textWhite ]}
          testID="progressBar.percent"
        >
          { percent } %
        </Text>
        <View 
          style={ styles.progressBar }
          testID="progressBar.progressBar"
        >  
          <ProgressBar 
            animated={ true }
            backgroundColor={ progressColor } 
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
    flexDirection:'row',
    borderRadius:10
  },
  textDone:{
    marginVertical:5,
    marginHorizontal:5,
  },
  textWhite: {
    color: colors.light
  },
  progressBar:{
    flex:1,
    justifyContent: 'center'
  }
})