import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_OVERTIME} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getOvertime = () => async dispatch => {
  await axios
    .get(`${BASE_URL}${URIS.GET_OVERTIME}`)
    .then(response => {
      dispatch({
        type: GET_OVERTIME,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get overtime`, err));
};
