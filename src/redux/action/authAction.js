import axios from 'axios';

import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_PROFILE,
  REMOVE_ERRORS,
  REGISTER,
  RESET_REGISTER,
  LOGIN,
  RESET_LOGIN,
} from '../type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '@/utils/setAuthToken';
import {BASE_URL, URIS} from '@/config';
import {ToastAndroid} from 'react-native';

export const registerUser = (userData, navigation) => dispatch => {
  axios
    .post(`${BASE_URL}${URIS.REGISTER}`, userData)
    .then(response => {
      dispatch({
        type: REGISTER,
        isSucces: true,
        isError: false,
      });
      console.log('response sukses register user', response.data);
      ToastAndroid.show(
        'Pendaftaran kamu Berhasil, silahkan Login',
        ToastAndroid.SHORT,
      );
      navigation.navigate('Login');
    })
    .catch(err => {
      console.log('res errr', err.response.data),
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
    });
};

export const loginUser = userData => dispatch => {
  axios
    .post(`${BASE_URL}${URIS.LOGIN}`, userData)
    .then(response => {
      if (response.data.status === 404) {
        ToastAndroid.show(`${response.data.message}`, ToastAndroid.SHORT);
        console.log('response login', response.data);
        dispatch({
          type: LOGIN,
          isError: true,
        });
      } else {
        // save to localstorage
        const {data} = response.data;
        console.log('ini data user', data);
        // set token to ls
        AsyncStorage.setItem('user', JSON.stringify(data));
        // // Set token to auth header
        // setAuthToken(token);
        // // // decode token to get user data
        // const decoded = jwt_decode(token);
        // console.log('ini decoded', decoded);
        // //set current user
        dispatch(setCurrentUser(data));
      }
    })
    .catch(err => {
      ToastAndroid.show(`Something Error: ${err} `, ToastAndroid.SHORT);
      // console.log('res errr', err);
      // console.log('res err.response.data', err.response.data);
      dispatch({
        type: LOGIN,
        isError: true,
      });
    });
};

//set logged user
export const setCurrentUser = decoded => async dispatch => {
  await dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

// log user out
export const logoutUser = () => dispatch => {
  // remove token from async storage
  AsyncStorage.removeItem('user');
  // remove auth header for future request
  // setAuthToken(false);
  dispatch(setCurrentUser({}));
};

// remove error message
export const removeError = () => async dispatch => {
  dispatch({
    type: REMOVE_ERRORS,
  });
};

export const resetRegister = () => async dispatch => {
  dispatch({
    type: RESET_REGISTER,
  });
};

export const resetLogin = () => async dispatch => {
  dispatch({
    type: RESET_LOGIN,
  });
};
