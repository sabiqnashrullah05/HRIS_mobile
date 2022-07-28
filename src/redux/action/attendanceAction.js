import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {
  GET_ATTENDANCE,
  RESET_ATTENDANCE,
  RESET_TIME_ATTENDANCE,
  POST_ATTENDANCE,
  ATTENDANCE_IN,
  ATTENDANCE_OUT,
} from '../type';
import {BASE_URL, URIS} from '@/config';

// get profile
export const getAttendance = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_ATTENDANCE}`, data)
    .then(response => {
      dispatch({
        type: GET_ATTENDANCE,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get ATTENDANCE`, err));
};

export const createAttendance = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.CREATE_ATTENDANCE}`, data)
    .then(response => {
      console.log('sukses create ATTENDANCE', response.data);
      ToastAndroid.show('Attendance Success Created', ToastAndroid.SHORT);

      dispatch({
        type: POST_ATTENDANCE,
        isSucces: true,
        isError: false,
      });
    })
    .catch(err => {
      ToastAndroid.show(`Something ERROR : ${err}`, ToastAndroid.SHORT);
      dispatch({
        type: POST_ATTENDANCE,
        isSucces: false,
        isError: true,
      });
    });
};

export const attendanceIn = data => dispatch => {
  dispatch({
    type: ATTENDANCE_IN,
    payload: data,
  });
};
export const attendanceOut = data => dispatch => {
  dispatch({
    type: ATTENDANCE_OUT,
    payload: data,
  });
};

export const resetTimeAttendance = () => dispatch => {
  dispatch({
    type: RESET_TIME_ATTENDANCE,
  });
};

export const resetAttendance = () => dispatch => {
  dispatch({
    type: RESET_ATTENDANCE,
  });
};
