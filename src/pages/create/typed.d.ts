export type CreateLocationProps = {
  CreateLocation: undefined;
};
export type LocationsCoord = {
  latitude: number;
  longitude: number;
};
export type FormValuesData = {
  name: string;
  latitude: string;
  longitude: string;
};
export interface CreateLocationNavigationProps {
  navigation: NavigationProp<CreateLocationProps>;
}
