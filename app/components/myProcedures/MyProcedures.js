import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { getLocalData } from '../../services/localStorage'
import ProcedureItem from './ProcedureItem'

const MyProcedures = ({ navigation }) => {

  const [myProcedures, setMyProcedures] = useState({})
  const [procedureKeys, setProcedureKeys] = useState([])
  const key = 'my-procedures';

  useEffect(() => {
    navigation.setOptions({
      headerRight: '',
      title: 'Mis Tramites'
    });
    let subscribed = true;
    getLocalData(key)
    .then(data => {
      if (data) {
        setMyProcedures(data);
        setProcedureKeys(Object.keys(data))
      }
    })
    .catch( err => console.error(err))
    return () => { 
      subscribed = false;
    }
  }, []);

  return (
    <View>
      {
        procedureKeys && procedureKeys.length > 0? procedureKeys.map(( item, index ) => (
          <ProcedureItem
            key={index}
            data={myProcedures[item]}
          />

        ))
        : <Text style={styles.textoInfo}> Parece que no hay nada por acá, inicie el seguimiento a un tramite </Text>
      }
      
    </View>
  )
}

export default MyProcedures;

const styles = StyleSheet.create({
  textoInfo: {
    fontSize: 30,
    marginVertical: '30%',
    marginHorizontal: 20,
    textAlign: 'center'
  }
});