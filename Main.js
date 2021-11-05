import React from 'react'
import Root from './router/Root';
import Procedure from './screens/procedure/Procedure';

export default function Main() {
  const info = require("./json/tramites.json");
  return (
    <Root/>
  )
}
