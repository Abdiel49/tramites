import React, { useContext } from 'react'
// import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Procedure from '../screens/procedure/Procedure';
import { colors } from '../styles/colors';
import TramiteCarrera from '../components/tramites/TramiteCarrera';
import TramiteCertificado from '../components/tramites/TramiteCertificado';
import Home from '../components/tramites/Home';

const RootStack = createStackNavigator();

export default function Root() {
  const datos = require('../json/tramites.json')
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.blue,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <RootStack.Screen
          name="Home" 
          component={ Home } 
          options={{
            title: 'HOME',
            
          }}
          naviga
        />

        <RootStack.Screen
          name="tramiteInscripcion" 
          component={ Procedure } 
          options={{
            title: 'Inscripcion a una carrera',
            
          }}
          naviga
        />

        <RootStack.Screen
          name={ '@CambioCarrera' } 
          component={ TramiteCarrera } 
          options={{
            title: 'Cambio de Carrera',
            
          }}
          naviga
        />

        <RootStack.Screen
          name={ '@CertAcad' } 
          component={ TramiteCertificado } 
          options={{
            title: 'Certificado Academico',
            
          }}
          naviga
        />
      
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
