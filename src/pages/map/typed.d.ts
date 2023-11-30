export interface InıtialReginCoordData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface LocationsCoordData {
  latitude: number;
  longitude: number;
}

export type MapScreenProps = {
  Map: undefined;
  CreateLocation: any;
};

export interface MapScreenNavigationProps {
  navigation: NavigationProp<MapScreenProps>;
}
