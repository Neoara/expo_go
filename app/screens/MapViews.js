import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useEffect } from 'react';

const MapViews = ({route}) => {
  const {longitude, latitude} = route.params

 useEffect(() => {
   console.log(route.params)
 }, [])

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} />
    </View>
  );
}

export default MapViews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});