import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'


export default function Navbar({title}) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ title || "This is a navbar"}</Text>
    </View>
  )
}

