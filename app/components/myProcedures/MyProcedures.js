import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { getLocalData } from '../../services/localStorage'
import ProcedureItem from './ProcedureItem'

const MyProcedures = () => {

  const [myProcedures, setMyProcedures] = useState({})
  const key = 'my-procedures';

  useEffect(async () => {
    const data = await getLocalData(key);
    console.log(data)
  }, [])

  return (
    <View>
      <Text>This is my procedures pending</Text>
      <ProcedureItem/>
    </View>
  )
}

export default MyProcedures
