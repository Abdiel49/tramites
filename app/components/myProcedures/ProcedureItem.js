import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Progress from '../progressBar/Progress'

export default function ProcedureItem() {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
    >
      <Text style={styles.texteStyle}>Holas</Text>
      <Progress
       
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#0F354A",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 10,
  },

  texteStyle: {
    color: "white",
    fontSize: 17,
  }
});
