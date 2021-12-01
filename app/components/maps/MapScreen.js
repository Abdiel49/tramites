import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { colors } from '../../styles/colors';

export default function MapScreen({ route }) {

  const [data, setData] = useState(route.params.data || {});
  const [location, setLocation] = useState({
    latitude: data.latitude,
    longitude: data.longitude,
  })

  return (
    <View style={styles.mapScreen}>
      <MapView
        style={ styles.mapView }
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.002965,
          longitudeDelta: 0.002965,
        }}
      >
        <Marker
          coordinate={{ latitude : location.latitude, longitude : location.longitude }}
          title="Edificio Decanato UMSS"
          description={`Atiente de L-V  de 8 - 16  hrs. Use medidas de bioseguridad`}
        />
      </MapView>

      <View style={styles.mapButtonContent}>
        <Pressable
          style={styles.button}
          onPress={()=> Alert.alert("holas")}
        >
          <Text style={ styles.buttonText }>Abrir en Google Maps</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})