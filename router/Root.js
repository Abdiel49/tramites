import React from 'react'
// import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Procedure from '../screens/procedure/Procedure';

const RootStack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>

        <RootStack.Screen
          name="Tramite De inscripcion" 
          component={ Procedure } 
        />
      
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
