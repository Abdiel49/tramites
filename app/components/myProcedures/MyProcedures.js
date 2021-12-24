import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ProcedureItem from './ProcedureItem'

const MyProcedures = () => {

  const [myProcedures, setMyProcedures] = useState([])

  return (
    <View>
      <Text>This is my procedures pending</Text>
      <ProcedureItem/>
    </View>
  )
}

export default MyProcedures
