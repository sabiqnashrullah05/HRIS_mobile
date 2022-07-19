import isEmpty from '../../utils/validation/is-empty';
import {
  SET_CURRENT_USER,
  REGISTER,
  RESET_REGISTER,
  LOGIN,
  RESET_LOGIN,
} from '../type';
// import isEmpty from '../../../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {},
  isSucces: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isError: action.isError,
      };
    case REGISTER:
      return {
        ...state,
        isSucces: action.isSuccess,
        isError: action.isError,
      };
    case RESET_REGISTER:
      return {
        ...state,
        isSucces: false,
        isError: false,
      };
    case RESET_LOGIN:
      return {
        ...state,

        isError: false,
      };

    default:
      return state;
  }
}
