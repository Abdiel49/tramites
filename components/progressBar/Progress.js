import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import ProgressBar from "react-native-animated-progress";

export default function Progress({value=50, data }) {
  
  const [percent, setPercent] = useState(1);

  useEffect(() => {
    let items = 0;
    
    Object.keys( data ).map( step => {
      if(data[step] === true) items++ 
    })
    let value = 100/Object.keys( data ).length;
    let p = items*value;
    console.log({value, p })
    setPercent( p );
  }, [data])
  // console.log( data )

  return (
    <View style={ styles.container}>
      <View style={ styles.progress }>
        
        <Text style={ styles.textDone}>{ percent }</Text>
        <View style={ styles.progressBar }>
          <ProgressBar progress={percent} height={8} backgroundColor="#4a0072" />
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
  progressDone: {
    // backgroundColor: colors.blue,
    // borderRadius:10,
    // justifyContent:'center',
    // alignItems:'center'
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