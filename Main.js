import React, { createContext } from 'react'
import Root from './app/navigation/Root';

export const DatosContext = createContext();

export default function Main() {
  return (
    <DatosContext.Provider value={null}>
      <Root/>
    </DatosContext.Provider>
  )
}
