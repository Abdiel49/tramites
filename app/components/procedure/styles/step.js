import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  stepCont: {
    position: 'relative',
    backgroundColor: colors.bgStepColor,
    color: 'black',
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderRightColor: 'rgba(181,181,181,0.5)',
    borderBottomColor: 'rgba(181,181,181,0.5)',
    borderRadius: 20,
    fontSize: 15,
  },
  stepContainer: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  stepNavbar: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignContent: "center",
  },
  stepNavbar_info: {
    display: "flex",
    flex: 1,
    margin: 5,
    padding: 3,
  },
  stepNumber: {
    fontWeight: "bold",
  },
  stepName: {},
  stepDataContainer: {},
  textBolt: {
    fontWeight: "bold",
  },
  containerSimple: {
    marginTop: 5,
  },
  containerList: {
    display: "flex",
    flex: 1,
    marginLeft: 5,
  },
  testListItem: {
    marginVertical: 5,
  },
  textItalic: {
    fontStyle: "italic",
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitleText: {
    alignContent: "center",
    display: "flex",
    flex: 1,
    flexGrow: 1,
    margin: 5,
    padding: 3,
  },
  scrollViewCont: {
    padding: 15,
  },
  buttonActionsColumn:{
    flexDirection:'column'
  }
})