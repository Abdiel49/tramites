import React, { createContext } from 'react'
import Root from './app/navigation/Root';

export const DatosContext = createContext();

export default function Main() {
  const cargaDatos = require('./app/assets/tramites.json');
  return (
    <DatosContext.Provider value={cargaDatos}>
      <Root/>
    </DatosContext.Provider>
  )
}
