import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {useSelector, useDispatch} from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import {logoutUser, setCurrentUser} from '../redux/action/authAction';
import {clearProfileUser} from '../redux/action/profileActions';

const AuthPage = ({navigation}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const jwtToken = await AsyncStorage.getItem('jwtToken');

    if (jwtToken) {
      const userData = jwt_decode(jwtToken);
      setAuthToken(jwtToken);
      dispatch(setCurrentUser(userData));

      const currenTime = Date.now() / 1000;

      if (userData.exp < currenTime) {
        alert('time out, Please Login again');

        dispatch(logoutUser());
        dispatch(clearProfileUser());
        return navigation.replace('Auth');
      }

      return navigation.replace('Home');
    } else {
      return navigation.replace('Auth');
    }
  };

  return null;
};

export default AuthPage;
