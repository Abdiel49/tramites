import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../styles/colors';
import Home from '../components/home/HomeScreen';
import Procedure from '../components/procedure/ProcedureScreen';
import Tramite from '../components/tramite/TramiteScreen';
import MapScreen from '../components/maps/MapScreen'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import TasksIcon from '../components/icons/TasksIcon';
import MyProcedures from '../components/myProcedures/MyProcedures';
import GoToMyProcesures from '../components/myProcedures/GoToMyProcesures';

const RootStack = createStackNavigator();

export default function Root() {
  
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={ colors.blue }
        barStyle="light-content"
      />
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <GoToMyProcesures/>
          )
        }}
      >

        <RootStack.Screen
          name="Home" 
          component={ Home } 
          options={{
            title: 'HOME',
          }}
        />

        <RootStack.Screen
          name="tramiteInscripcion" 
          component={ Procedure } 
          options={{
            title: 'Inscripcion a una carrera',
          }}
        />

        <RootStack.Screen
          name="tramite" 
          component={ Tramite }
        />

        <RootStack.Screen
          name="maps" 
          component={ MapScreen }
        />

        <RootStack.Screen
          name="my-procedures" 
          component={ MyProcedures }
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
