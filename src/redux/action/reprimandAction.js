import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_REPRIMAND} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getReprimand = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_REPRIMAND}`, data)
    .then(response => {
      dispatch({
        type: GET_REPRIMAND,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get reprimand`, err));
};
