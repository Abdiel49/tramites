import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
  buttonActionsColumn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  containerList: {
    display: 'flex',
    flex: 1,
    marginLeft: 5
  },
  containerSimple: {
    marginTop: 5
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowTitleText: {
    alignContent: 'center',
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    margin: 5,
    padding: 3
  },
  scrollViewCont: {
    padding: 15
  },
  stepCont: {
    backgroundColor: colors.bgStepColor,
    borderBottomColor: 'rgba(181,181,181,0.5)',
    borderBottomWidth: 4,
    borderRadius: 20,
    borderRightColor: 'rgba(181,181,181,0.5)',
    borderRightWidth: 4,
    color: 'black',
    display: 'flex',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    padding: 15,
    position: 'relative'
  },
  stepContainer: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    margin: 10,
    padding: 10
  },
  stepDataContainer: {},
  stepName: {},
  stepNavbar: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1
  },
  stepNavbar_info: {
    display: 'flex',
    flex: 1,
    margin: 5,
    padding: 3
  },
  stepNumber: {
    fontWeight: 'bold'
  },
  testListItem: {
    marginVertical: 5
  },
  textBolt: {
    fontWeight: 'bold'
  },
  textItalic: {
    fontStyle: 'italic'
  }
});
