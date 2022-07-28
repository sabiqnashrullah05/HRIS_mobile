import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_TIMEOFF} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getTimeoff = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_TIMEOFF}`, data)
    .then(response => {
      dispatch({
        type: GET_TIMEOFF,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get timeoff`, err));
};
