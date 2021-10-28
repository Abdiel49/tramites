import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
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
  stepTitle: {
    // flex:1,
    // flexWrap:'wrap',
    // flexShrink: 1,
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
})