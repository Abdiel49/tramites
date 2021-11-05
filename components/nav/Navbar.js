import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import BackIcon from './BackIcon';



export default function Navbar({title}) {

  // const navigator = useNavigation();
  // console.log('from navbar:', navigator)
  
  // const [routes, setRoutes] = useState(navigator.getState().routes.length)

  return (
    <View style={ styles.container }>
      <View style={ styles.iconBack }>
        {
          (routes ) && (
            <BackIcon/>
          )
        }
      </View>
      <Text style={ styles.title }>{ title || "This is a navbar"}</Text>
    </View>
  )
}

