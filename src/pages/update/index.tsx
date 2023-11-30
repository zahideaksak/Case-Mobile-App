import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {styles} from './styled';
import MapView, {MapPressEvent, Marker} from 'react-native-maps';
import {useAppDispatch, useAppSelector} from '../../modules/hooks';
import {updateLocation} from '../../redux/slices/locationSlice';
import {
  FormValuesData,
  InıtialReginCoordData,
  LocationsCoordData,
  UpdateScreenNavigationProps,
} from './typed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  latitude: Yup.string(),
  longitude: Yup.string(),
});
const UpdateLocation: React.FC<UpdateScreenNavigationProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const {item} = route.params as {item: FormValuesData};
  const [updateItem, setUpdateItem] = useState<LocationsCoordData>({
    latitude: parseFloat(item.latitude),
    longitude: parseFloat(item.longitude),
  });
  const dispatch = useAppDispatch();

  const {
    values: formValues,
    handleBlur,
    handleSubmit,
    handleChange,
    setValues,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      autoId: item.autoId,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    },
    onSubmit: values => handleUpdate(values),
    validationSchema: validationSchema,
  });

  useEffect(() => {
    setValues({
      autoId: item.autoId,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    });
    setUpdateItem({
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longitude),
    });
  }, [item, setValues]);

  const handleUpdate = ({
    autoId,
    name,
    latitude,
    longitude,
  }: FormValuesData) => {
    dispatch(updateLocation({autoId, name, latitude, longitude}));
    navigation.goBack();
  };

  const initialRegionCord: InıtialReginCoordData = {
    latitude: parseFloat(item.latitude),
    longitude: parseFloat(item.longitude),
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const handleOnPress = (event: MapPressEvent) => {
    event.persist();
    setTimeout(() => {
      const coordinate: LocationsCoordData = event.nativeEvent.coordinate;
      setValues({
        ...formValues,
        latitude: coordinate.latitude.toString(),
        longitude: coordinate.longitude.toString(),
      });
      setUpdateItem({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegionCord}
        onPress={event => handleOnPress(event)}>
        <Marker coordinate={updateItem} />
      </MapView>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formValues.name}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
        />
        {touched.name && errors.name && (
          <Text style={styles.errText}>{errors.name}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Latitude"
          value={formValues.latitude}
          onChangeText={handleChange('latitude')}
          onBlur={handleBlur('latitude')}
          keyboardType="numeric"
        />
        {touched.name && errors.name && (
          <Text style={styles.errText}>{errors.name}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Longitude"
          value={formValues.longitude}
          onChangeText={handleChange('longitude')}
          onBlur={handleBlur('longitude')}
          keyboardType="numeric"
        />
        {touched.name && errors.name && (
          <Text style={styles.errText}>{errors.name}</Text>
        )}

        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateLocation;
