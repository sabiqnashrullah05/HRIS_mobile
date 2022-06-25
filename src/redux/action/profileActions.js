import axios from 'axios';
// import {apiUrl} from '../../../utils/Data';
import {GET_PROFILE, CLEAR_PROFILE, UPDATE_PROFILE} from '../type';
import {BASE_URL, URIS} from '@/config';
const apiUrl = 'https://admin.proo.co.id';

// get profile
export const getProfileUser = (idUser, userType) => async dispatch => {
  let apiPath = BASE_URL;
  if (userType.toLowerCase() === 'siswa') {
    apiPath += URIS.USER_SISWA + idUser;
    // console.log(`data siswa`, apiPath);
  } else if (userType.toLowerCase() === 'guru') {
    apiPath += URIS.USER_GURU + idUser;

    // console.log(`data guru`, apiPath);
  }

  await axios
    .get(apiPath)
    .then(response => {
      // console.log(`get profile`, response.data);
      dispatch({
        type: GET_PROFILE,
        payload: response.data,
      });
    })
    .catch(err => console.log(`err get profile`, err));
};

// update profile
export const updateProfileUser =
  (idUser, dataUser, userType) => async dispatch => {
    await axios
      .put(`${apiUrl}/api/${userType}/update/${idUser}`, dataUser)
      .then(response => {
        console.log(`update profile`, response.data);
        dispatch({
          type: UPDATE_PROFILE,
          payload: response.data,
        });
      })
      .catch(err => console.log(`err update profile`, err));
  };

// Clear profile
export const clearProfileUser = () => {
  return {
    type: CLEAR_PROFILE,
  };
};
