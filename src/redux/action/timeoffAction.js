import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_TIMEOFF} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getTimeoff = () => async dispatch => {
  await axios
    .get(`${BASE_URL}${URIS.GET_TIMEOFF}`)
    .then(response => {
      dispatch({
        type: GET_TIMEOFF,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get timeoff`, err));
};
