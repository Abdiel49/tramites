import React from 'react';
import { Pressable } from 'react-native';
import Checked from './svg/Checked';
import UnCheck from './svg/UnCheck';

export default function Checkbox ({
  value = false,
  onCheck,
  colorUnCheck = '',
  colorCheck = ''
}) {
  return (
    <Pressable
      onPress={ () => onCheck() }
    >
      {
        value ? <Checked /> : <UnCheck/>
      }
    </Pressable>
  );
}
