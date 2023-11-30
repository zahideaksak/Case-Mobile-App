import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import MapScreen from '../pages/map';
import DrawerHeaderButton from '../components/drawerHeaderButton';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = props => {
  const renderDrawerHeaderButton = () => (
    <DrawerHeaderButton navigation={undefined} {...props} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ee5426',
        },
        headerTintColor: '#fff',
        headerLeft: renderDrawerHeaderButton,
      }}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
