import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_RESIGN} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getResign = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_RESIGN}`, data)
    .then(response => {
      dispatch({
        type: GET_RESIGN,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get resign`, err));
};
