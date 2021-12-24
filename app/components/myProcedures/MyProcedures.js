import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getLocalData } from '../../services/localStorage'
import ProcedureItem from './ProcedureItem'

const MyProcedures = () => {

  const [data, setData] = useState(null)
  const [myProcedures, setMyProcedures] = useState({})
  const [procedureKeys, setProcedureKeys] = useState([])  
  const key = 'my-procedures';

  useEffect(async () => {
    let dat = {}
    const traerDatos = async()=>{
      dat = await getLocalData(key);
      // setData(dat);
      setMyProcedures(dat);
    }
    traerDatos();
  }, [])
  
  useEffect(() => {
    setProcedureKeys(Object.keys(myProcedures))
  }, [myProcedures])

  return (
    <View>
      {
        !!procedureKeys !== null ? procedureKeys.map( item => (
          <ProcedureItem
            data={myProcedures[item]}
          />

        )): null
      }
      
    </View>
  )
}

export default MyProcedures
