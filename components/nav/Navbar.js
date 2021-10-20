import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export default function Navbar({title}) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ title || "This is a navbar"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.blue,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    marginTop:15,
    color: colors.light,
    fontSize: 22,
    fontWeight: "bold",
  }
})
