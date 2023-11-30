import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useRoute} from '@react-navigation/native';
import {styles} from './styled';
import {useAppDispatch, useAppSelector} from '../../modules/hooks';
import {addLocation, incrementId} from '../../redux/slices/locationSlice';
import {
  CreateLocationNavigationProps,
  FormValuesData,
  LocationsCoord,
} from './typed';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  latitude: Yup.string(),
  longitude: Yup.string(),
});

const CreateLocation: React.FC<CreateLocationNavigationProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const {selectedLocation} = route.params as {
    selectedLocation: LocationsCoord;
  };
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.system.location.locations);
  const autoId = useAppSelector(state => state.system.location.autoId);
  console.log('data: ', data);

  const {
    values: formValues,
    handleBlur,
    handleSubmit,
    handleChange,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      latitude: selectedLocation.latitude.toString(),
      longitude: selectedLocation.longitude.toString(),
    },
    onSubmit: values => handleOnPress(values),
    validationSchema: validationSchema,
  });

  const handleOnPress = ({name, latitude, longitude}: FormValuesData) => {
    dispatch(incrementId());
    dispatch(addLocation({autoId, name, latitude, longitude}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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
        value={formValues.latitude.toString()}
        onChangeText={handleChange('latitude')}
        onBlur={handleBlur('latitude')}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={formValues.longitude.toString()}
        onChangeText={handleChange('longitude')}
        onBlur={handleBlur('longitude')}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateLocation;
