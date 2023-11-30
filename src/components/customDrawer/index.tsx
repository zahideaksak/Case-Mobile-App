import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './styled';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentStyle}>
        <View style={styles.titleView}>
          <Text style={styles.title1}>Global Tours & Tickets</Text>
          <Text style={styles.title2}>Case Mobile November 2023</Text>
        </View>
        <View style={styles.itemListView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Auth');
        }}>
        <View style={styles.logoutView}>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
