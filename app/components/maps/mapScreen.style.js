import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    marginVertical: 10,
    padding: 10
  },
  buttonText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  mapButtonContent: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    width: '100%'
  },
  mapScreen: {
    height: '100%'
  },
  mapView: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});
