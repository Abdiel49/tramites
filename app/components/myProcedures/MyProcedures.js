import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getLocalData } from '../../services/localStorage'
import ProcedureItem from './ProcedureItem'

const MyProcedures = () => {

  const [myProcedures, setMyProcedures] = useState({})
  const [procedureKeys, setProcedureKeys] = useState([])
  const key = 'my-procedures';

  useEffect(() => {
    let subscribed = true;
    getLocalData(key)
    .then(data => {
      // console.log(Object.keys(data))
      // console.log(data)
      setMyProcedures(data);
      setProcedureKeys(Object.keys(data))
    })
    .catch( err => console.error(err))
    return () => { 
      subscribed = false;
    }
  }, []);

  return (
    <View>
      {
        procedureKeys && procedureKeys.map(( item, index ) => (
          <ProcedureItem
            key={index}
            data={myProcedures[item]}
          />

        ))
      }
      
    </View>
  )
}

export default MyProcedures
