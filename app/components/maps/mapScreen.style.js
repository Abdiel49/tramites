import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  mapScreen:{
    height:'100%',
  },
  mapView: {
    flex:1,
    width:'100%',
    height:'100%',
  },
  mapButtonContent:{
    flexDirection:'row',
    backgroundColor: colors.blue,  
    width:'100%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    backgroundColor: colors.blue,
    padding:10,
    marginVertical:10,
  },
  buttonText:{
    color: colors.light,
    fontWeight: 'bold',
    fontSize:18,
  },
})