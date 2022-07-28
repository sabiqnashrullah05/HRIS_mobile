import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_ASSET} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getAsset = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_ASSET}`, data)
    .then(response => {
      dispatch({
        type: GET_ASSET,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get asset`, err));
};
