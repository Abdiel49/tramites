import React from 'react'
import Procedure from './screens/procedure/Procedure';

export default function Main() {
  const info = require("./json/tramites.json");
  return (
    <Procedure/>
  )
}
