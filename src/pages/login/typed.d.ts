export type LoginProps = {
  MapCreateLocation: undefined;
  HomeScreen: undefined;
};

export interface LoginData {
  name: string;
  surname: string;
}
export interface LoginNavigationProps {
  navigation: NavigationProp<LoginProps>;
}
