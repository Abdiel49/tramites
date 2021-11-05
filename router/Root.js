import React from 'react'
// import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Procedure from '../screens/procedure/Procedure';
import { colors } from '../styles/colors';

const RootStack = createStackNavigator();

export default function Root() {
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
          name="tramiteInscripcion" 
          component={ Procedure } 
          options={{
            title: 'Inscripcion a una carrera',
            
          }}
          naviga
        />
      
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
