import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getLocalData } from '../../services/localStorage'
import Progress from '../progressBar/Progress'

export default function ProcedureItem({ data }) {
  
  const [checksStored, setChecksStored] = useState({})
  const navigation = useNavigation();

  useEffect(() => {
    getLocalData(data.nombre)
    .then(checks => {
      setChecksStored(checks)
    })
    .catch(err => console.log(err));
  }, [data])

  const navifateToTramiteScreen = () => {
    navigation.navigate("tramite", {
      tramite: data
    })
  }

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={ navifateToTramiteScreen }
    >
      <Text style={styles.texteStyle}>{data.titulo}</Text>
      <Progress
        textWhite={ true }
        data={ checksStored }
        isBgDark={ true }
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
