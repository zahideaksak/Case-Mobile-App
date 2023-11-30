import React, {FC, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {styles} from './styled';
import {useAppDispatch, useAppSelector} from '../../modules/hooks';
import {setLoggedIn} from '../../redux/slices/authSlice';
import {LoginData, LoginNavigationProps} from './typed';

const LoginValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name Is A Required Field'),
  surname: Yup.string().required('Surname Is A Required Field'),
});

export const Login: FC<LoginNavigationProps> = ({navigation}) => {
  const [isAuthError, setIsAuthError] = useState<boolean>(true);
  const isLogged: boolean = useAppSelector(
    state => state.system.auth.isLoggedIn,
  );

  useEffect(() => {
    if (isLogged) {
      navigation.navigate('HomeScreen');
    }
  }, [isLogged, navigation]);

  const {
    values: formValues,
    handleBlur,
    handleSubmit,
    handleChange,
    errors,
  } = useFormik({
    initialValues: {name: '', surname: ''},
    onSubmit: values => {
      handleLogin(values);
    },
    validationSchema: LoginValidationSchema,
  });
  const dispatch = useAppDispatch();
  const getName = useAppSelector(state => state.system.auth.name);
  const getSurname = useAppSelector(state => state.system.auth.surname);

  const handleLogin = ({name, surname}: LoginData) => {
    if (name === getName && surname === getSurname) {
      navigation.navigate('HomeScreen');
      dispatch(setLoggedIn(true));
    } else {
      setIsAuthError(false);
      setTimeout(() => {
        setIsAuthError(true);
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={formValues.name}
          placeholder="Name"
        />
        {errors.name && <Text style={styles.errText}>{errors.name}</Text>}
        <TextInput
          style={styles.input}
          onChangeText={handleChange('surname')}
          onBlur={handleBlur('surname')}
          value={formValues.surname}
          placeholder="Surname"
        />
        {errors.surname && <Text style={styles.errText}>{errors.surname}</Text>}
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text>{!isAuthError && 'Giriş Yapılamadı'}</Text>
        </View>
      </View>
    </View>
  );
};
