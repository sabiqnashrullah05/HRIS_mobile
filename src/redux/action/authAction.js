import axios from 'axios';

import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_PROFILE,
  REMOVE_ERRORS,
} from '../type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '@/utils/setAuthToken';
import {BASE_URL, URIS} from '@/config';

export const loginUser = (type, userData) => dispatch => {
  axios
    .post(
      `${BASE_URL}${type === 'siswa' ? URIS.LOGIN_SISWA : URIS.LOGIN_GURU}`,
      userData,
    )
    .then(response => {
      // save to localstorage
      const {token, user} = response.data;
      console.log('ini token', token);
      // set token to ls
      AsyncStorage.setItem('jwtToken', token);
      // // Set token to auth header
      setAuthToken(token);
      // // decode token to get user data
      const decoded = jwt_decode(token);
      console.log('ini decoded', decoded);
      // //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log('res errr', err.response.data),
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
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
  AsyncStorage.removeItem('jwtToken');
  // remove auth header for future request
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

// remove error message
export const removeError = () => async dispatch => {
  dispatch({
    type: REMOVE_ERRORS,
  });
};
