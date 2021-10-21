import React from 'react'
import { Pressable } from 'react-native'
import Minus from './svg/Minus'
import Plus from './svg/Plus'

export default function SeeMore({ value = false, onPress}) {
  return (
    <Pressable
      onPress={ () => onPress() }
    >
      { value ? <Minus /> : <Plus /> }
    </Pressable>
  )
}
