import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TasksIcon from '../icons/TasksIcon';
import { colors } from '../../styles/colors';

const GoToMyProcesures = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={()=> navigation.navigate('my-procedures') }
    >
      <TasksIcon
        fill={ colors.light2 }
        size={34}
      />
    </TouchableOpacity>
  )
}

export default GoToMyProcesures;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 20,
    backgroundColor: 'transparent',
    color: colors.green,
  }
})