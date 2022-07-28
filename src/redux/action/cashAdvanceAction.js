import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_CASH_ADVANCE, POST_CASH_ADVANCE, RESET_CASH_ADVANCE} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getCashAdvance = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_CASH_ADVANCE}`, data)
    .then(response => {
      dispatch({
        type: GET_CASH_ADVANCE,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get cash advance`, err));
};

export const createCashAdvance = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.CREATE_CASH_ADVANCE}`, data)
    .then(response => {
      console.log('sukses create cash advance', response.data);
      ToastAndroid.show('Cash Advance Success Created', ToastAndroid.SHORT);

      dispatch({
        type: POST_CASH_ADVANCE,
        isSucces: true,
        isError: false,
      });
    })
    .catch(err => {
      console.log('err created cash advance', err);
      ToastAndroid.show(`Something ERROR : ${err}`, ToastAndroid.SHORT);
      dispatch({
        type: POST_CASH_ADVANCE,
        isSucces: false,
        isError: true,
      });
    });
};

export const resetCashAdvance = () => dispatch => {
  dispatch({
    type: RESET_CASH_ADVANCE,
  });
};
