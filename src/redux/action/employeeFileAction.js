import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {GET_EMPLOYEE_FILE} from '../type';
import {BASE_URL, URIS} from '@/config';

// get overtime
export const getEmployeeFile = data => async dispatch => {
  await axios
    .post(`${BASE_URL}${URIS.GET_EMPLOYEE_FILE}`, data)
    .then(response => {
      dispatch({
        type: GET_EMPLOYEE_FILE,
        payload: response.data.result,
      });
    })
    .catch(err => console.log(`err get employee file`, err));
};
