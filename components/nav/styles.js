import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.blue_dark,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    marginTop:15,
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
  }
})