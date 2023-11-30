import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MapView, {MapPressEvent, Marker} from 'react-native-maps';
import {styles} from './styled';
import {
  InıtialReginCoordData,
  LocationsCoordData,
  MapScreenNavigationProps,
} from './typed';

const MapScreen: React.FC<MapScreenNavigationProps> = ({navigation}) => {
  const [showCreateButton, setShowCreateButton] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationsCoordData>();

  const handleOnPress = (event: MapPressEvent) => {
    event.persist();
    setTimeout(() => {
      const coordinate: LocationsCoordData = event.nativeEvent.coordinate;
      setSelectedLocation({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
      setShowCreateButton(true);
    }, 1000);
  };

  const handleCreateButtonPress = () => {
    navigation.navigate('Location Create', {selectedLocation}); // Navigating to CreateLocationScreen
  };

  const initialRegionCord: InıtialReginCoordData = {
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegionCord}
        onPress={handleOnPress}>
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      {showCreateButton && (
        <TouchableOpacity
          style={styles.btnCreate}
          onPress={handleCreateButtonPress}>
          <Text style={styles.textBtnCreate}>Create</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default MapScreen;
