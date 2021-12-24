import React, { useEffect, useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native';
import { buscar } from './buscar';
import LupaIcon from './LupaIcon';

const Buscador = ({ tramites, setTramites }) => {

  const [textoBuscador, setTextoBuscador] = useState('');

  useEffect(()=>{
    setTramites(buscar(textoBuscador, tramites));
  },[textoBuscador]);

    return (
      <View style={styles.contBuscador}>
        <TextInput
          testID='search-input'
          style={
            (textoBuscador=='')? (styles.buscador):(styles.buscadorFull)
          }
          onChangeText={setTextoBuscador}
          value={textoBuscador}
          placeholder="Buscar..."
        />
        {
          (textoBuscador=='')&&(
            <View style={styles.lupaIcon}>
              <LupaIcon/>                 
            </View>
          )
        }
      </View>
    )
}

export default Buscador;

const styles = StyleSheet.create({
  buscador: {
    paddingHorizontal: '1%',
    marginVertical: 10,
    marginLeft: 15,
    width: '80%',
    height: 45,
    fontSize: 20,
    flexDirection: 'column',
    borderWidth: 0,
  },

  buscadorFull: {
    marginVertical: 10,
    marginLeft: 15,
    paddingHorizontal: '1%',
    width: '100%',
    height: 45,
    fontSize: 20,
    flexDirection: 'column',
    borderWidth: 0,
  },

  contBuscador: {
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'center',
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 10
  },

  lupaIcon: {
    marginLeft: 'auto',
    marginRight: 10,
    justifyContent: 'center',
    //width: '15%'
  },
});