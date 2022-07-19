import {GET_REIMBURSMENT, RESET_REIMBURSMENT, POST_REIMBURSMENT} from '../type';

const initialState = {
  data: [],
  isSucces: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REIMBURSMENT:
      return {
        ...state,
        data: action.payload,
        isSucces: action.isSucces,
        isError: action.isError,
      };
    case POST_REIMBURSMENT:
      return {
        ...state,
        isSucces: action.isSucces,
        isError: action.isError,
      };
    case RESET_REIMBURSMENT:
      return {
        ...state,
        isSucces: false,
        isError: false,
      };

    default:
      return state;
  }
}
