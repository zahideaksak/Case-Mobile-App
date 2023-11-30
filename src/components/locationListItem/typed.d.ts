export interface LocationStateData {
  name: string;
  latitude: string;
  longitude: string;
}

export type ListScreenProps = {
  List: undefined;
  'Location Update': {item: LocationStateData};
};

export interface LocationItemProps {
  item: LocationStateData;
  navigation: NavigationProp<ListScreenProps>;
}
