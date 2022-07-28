import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_LOAN} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getLoan = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_LOAN}`, data)
    .then(response => {
      dispatch({
        type: GET_LOAN,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get loan`, err));
};
