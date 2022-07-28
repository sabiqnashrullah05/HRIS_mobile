import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_COMPANY_FILE} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getCompanyFile = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_COMPANY_FILE}`, data)
    .then(response => {
      dispatch({
        type: GET_COMPANY_FILE,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get company file`, err));
};
