import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getLocalData } from '../../services/localStorage'
import ProcedureItem from './ProcedureItem'

const MyProcedures = () => {

  const [myProcedures, setMyProcedures] = useState({})
  const [procedureKeys, setProcedureKeys] = useState()  
  const key = 'my-procedures';

  useEffect(async () => {
    const data = await getLocalData(key);
    setProcedureKeys(Object.keys(data))
    setMyProcedures(data);
  }, [])

  return (
    <View>
      {
        procedureKeys && procedureKeys.map( item => (
          <ProcedureItem
            data={myProcedures[item]}
          />

        ))
      }
      
    </View>
  )
}

export default MyProcedures
