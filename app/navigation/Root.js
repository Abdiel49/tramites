import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../styles/colors';
import Home from '../components/home/HomeScreen';
import Procedure from '../components/procedure/ProcedureScreen';
import TramiteCarrera from '../components/tramite/TramiteCarrera';
import TramiteCertificado from '../components/tramite/TramiteCertificado';

const RootStack = createStackNavigator();

export default function Root() {
  const datos = require('../assets/tramites.json')
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
            title: 'Certificado Académico',
            
          }}
          naviga
        />
      
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
