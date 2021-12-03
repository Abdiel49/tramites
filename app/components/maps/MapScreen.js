import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Pressable, 
    Platform, 
    Linking 
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './mapScreen.style'

export default function MapScreen({ route, navigation }) {

  const [data, setData] = useState(route.params.data || {});
  const { description, location:loc, locationTitle, stepTitle } = data;
  const [location, setLocation] = useState({
    latitude: loc.latitude,
    longitude: loc.longitude,
  })

  useEffect(() => {
    navigation.setOptions({title: stepTitle});
  }, [])

  const openMapApplication = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${location.latitude},${location.longitude}`;
    const label = locationTitle;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
  }

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
        testID="map-view"
      >
        <Marker
          coordinate={{ latitude : location.latitude, longitude : location.longitude }}
          title={ locationTitle }
          description={ description }
          testID="mark-maps-view"
        />
      </MapView>

      <View style={styles.mapButtonContent}>
        <Pressable
          style={styles.button}
          onPress={ openMapApplication }
          testID="openMapsApp"
        >
          <Text style={ styles.buttonText }>Abrir con otra aplicacion</Text>   
        </Pressable>
      </View>
    </View>
  )
}
