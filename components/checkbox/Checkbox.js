import React from "react";
import { Pressable } from "react-native";
import Checked from "./svg/Checked";
import UnCheck from "./svg/UnCheck";

export default function Checkbox({
      value = false, 
      onCheck,
      colorUnCheck='',
      colorCheck='',
}) {
  const handleCheck = () => {
    if( onCheck === Function ) onCheck()
  }
  return (
    <Pressable
      // onPress={ handleCheck }
      onPress={ () => onCheck() }
    >
      {
        value ? <Checked /> : <UnCheck/>
      }
    </Pressable>
  );
}
