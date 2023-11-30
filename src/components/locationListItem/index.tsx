import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styled';
import {useAppDispatch} from '../../modules/hooks';
import {deleteLocation} from '../../redux/slices/locationSlice';
import {LocationItemProps} from './typed';

const LocationListItem: React.FC<LocationItemProps> = ({item, navigation}) => {
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    navigation.navigate('Location Update', {item});
    //dispatch(updateLocation(item));
  };

  const handleDelete = () => {
    console.log(item);
    dispatch(deleteLocation(item));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textName}>{item.name}</Text>
        <View style={styles.textView}>
          <Text style={styles.textLatLongTitle}>Latitude</Text>
          <Text style={styles.textLatLong}>{item.latitude}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textLatLongTitle}>Longitude</Text>
          <Text style={styles.textLatLong}>{item.longitude}</Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
          <Icon
            name={'pencil'}
            size={26}
            color="#fffdff"
            style={styles.iconUpdate}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.btn}>
          <Icon
            name="trash"
            size={26}
            color="#fffdff"
            style={styles.iconDelete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationListItem;
