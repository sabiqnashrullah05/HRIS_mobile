import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_REIMBURSMENT, RESET_REIMBURSMENT, POST_REIMBURSMENT} from '../type';
import {BASE_URL, URIS} from '@/config';

// get profile
export const getReimbursment = () => async dispatch => {
  await axios
    .get(`${BASE_URL}${URIS.GET_REIMBURSMENT}`)
    .then(response => {
      dispatch({
        type: GET_REIMBURSMENT,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get reimbursment`, err));
};

export const createReimbursment = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.CREATE_REIMBURSMENT}`, data)
    .then(response => {
      console.log('sukses create reimbursment', response.data);
      ToastAndroid.show('Reimbursment Success Created', ToastAndroid.SHORT);

      dispatch({
        type: POST_REIMBURSMENT,
        isSucces: true,
        isError: false,
      });
    })
    .catch(err => {
      ToastAndroid.show(`Something ERROR : ${err}`, ToastAndroid.SHORT);
      dispatch({
        type: POST_REIMBURSMENT,
        isSucces: false,
        isError: true,
      });
    });
};

export const resetReimbursment = () => dispatch => {
  dispatch({
    type: RESET_REIMBURSMENT,
  });
};
