import {GET_COMPANY_FILE} from '../type';

const initialState = {
  data: [],
  isSucces: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_FILE:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
