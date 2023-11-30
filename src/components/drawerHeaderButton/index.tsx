import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderButtonScreenProps} from './typed';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styled';

const DrawerHeaderButton: React.FC<HeaderButtonScreenProps> = props => {
  return (
    <View {...props}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <Icon name="menu" size={26} color="#fffdff" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeaderButton;
