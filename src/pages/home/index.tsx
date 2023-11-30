import React from 'react';
import {View} from 'react-native';
import DrawerNavigator from '../../navigators/DrawerNavigator';
import {styles} from './styled';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
};

export default HomeScreen;
