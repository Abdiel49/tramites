import React, { useEffect } from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TasksIcon from '../icons/TasksIcon';
import { colors } from '../../styles/colors';

const GoToMyProcesures = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      style={styles.icon}
      onPress={()=> navigation.navigate('my-procedures') }
    >
      <TasksIcon
        fill={ colors.light2 }
        size={34}
      />
    </TouchableHighlight>
  )
}

export default GoToMyProcesures;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 20,
    color: colors.green,
  }
})