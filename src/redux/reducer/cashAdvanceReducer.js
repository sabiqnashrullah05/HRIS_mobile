import {GET_CASH_ADVANCE, POST_CASH_ADVANCE, RESET_CASH_ADVANCE} from '../type';

const initialState = {
  data: [],
  isSucces: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASH_ADVANCE:
      return {
        ...state,
        data: action.payload,
      };

    case POST_CASH_ADVANCE:
      return {
        ...state,
        isSucces: action.isSucces,
        isError: action.isError,
      };
    case RESET_CASH_ADVANCE:
      return {
        ...state,
        isSucces: false,
        isError: false,
      };

    default:
      return state;
  }
}
