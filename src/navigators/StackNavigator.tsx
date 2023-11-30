import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/login';
import CreateLocation from '../pages/create';
import UpdateLocation from '../pages/update';
import HomeScreen from '../pages/home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#ee5426',
        },
      }}>
      <Stack.Screen
        name="Auth"
        component={Login}
        options={{headerShown: true, headerTintColor: 'white'}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Location Create"
        component={CreateLocation}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Location Update"
        component={UpdateLocation}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
