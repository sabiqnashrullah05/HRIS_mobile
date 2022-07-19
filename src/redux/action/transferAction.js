import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_TRANSFER} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getTransfer = () => async dispatch => {
  await axios
    .get(`${BASE_URL}${URIS.GET_TRANSFER}`)
    .then(response => {
      dispatch({
        type: GET_TRANSFER,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get transfer`, err));
};
