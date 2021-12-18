import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

const tramiteStyle = StyleSheet.create({
  scrollViewCont: {
    padding: 15
  },
  stepCont: {
    alignItems: 'center',
    backgroundColor: colors.bgStepColor,
    borderBottomColor: 'rgba(181,181,181,0.5)',
    borderBottomWidth: 4,
    borderRadius: 20,
    borderRightColor: 'rgba(181,181,181,0.5)',
    borderRightWidth: 4,
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    padding: 15,
    position: 'relative'
  },
  stepCont2: {
    backgroundColor: colors.bgStepColor,
    borderBottomColor: 'rgba(181,181,181,0.5)',
    borderBottomWidth: 4,
    borderRadius: 20,
    borderRightColor: 'rgba(181,181,181,0.5)',
    borderRightWidth: 4,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    padding: 15,
    position: 'relative'
  },
  stepDesc: {
    fontSize: 15
  },
  texto: {
    fontSize: 15,
    paddingHorizontal: 16
  },
  textoNegrita: {
    fontWeight: 'bold'
  }
});

export default tramiteStyle;
