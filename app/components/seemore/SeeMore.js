import React from 'react';
import { Pressable } from 'react-native';
import DownArrow from './svg/DownArrow';
import UpArrow from './svg/UpArrow';

export default function SeeMore ({
  value = false,
  onPress
}) {
  return (
    <Pressable
      onPress={ () => onPress() }
    >
      { value ? <UpArrow /> : <DownArrow /> }
    </Pressable>
  );
}
