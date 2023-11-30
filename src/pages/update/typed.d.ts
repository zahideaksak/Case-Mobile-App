export type FormValuesData = {
  autoId: number;
  name: string;
  latitude: string;
  longitude: string;
};

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
export type UpdateScreenProps = {
  Map: undefined;
  UpdateLocation: any;
};

export interface UpdateScreenNavigationProps {
  navigation: NavigationProp<UpdateScreenProps>;
}
