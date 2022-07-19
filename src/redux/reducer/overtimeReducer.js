import {GET_OVERTIME} from '../type';

const initialState = {
  data: [],
  isSucces: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_OVERTIME:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
