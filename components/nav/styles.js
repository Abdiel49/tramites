import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    flexGrow:2,
    backgroundColor: colors.blue_dark,
    padding:10,
    alignItems:"center",
    // justifyContent:"space-between",
  },
  title:{
    marginVertical:5,
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
    justifyContent:'center'
  },
  iconBack: {
    marginHorizontal:10,
    marginVertical:5,
  }
})