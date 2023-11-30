export interface Location {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}

export type ListScreenNavigateProps = {
  item: LocationStateData;
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'List'>;
};

export interface LocationStateData {
  autoId: number;
  name: string;
  latitude: string;
  longitude: string;
}

export type ListScreenProps = {
  List: undefined;
  'Location Update': {item: LocationStateData};
};
