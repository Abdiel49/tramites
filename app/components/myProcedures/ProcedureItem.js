import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Progress from '../progressBar/Progress'

export default function ProcedureItem({ data }) {
  console.log(data)
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
    >
      <Text style={styles.texteStyle}>holas</Text>
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
