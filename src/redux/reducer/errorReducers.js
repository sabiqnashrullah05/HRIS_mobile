import {GET_ERRORS, REMOVE_ERRORS} from '../type';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case REMOVE_ERRORS:
      return initialState;
    default:
      return state;
  }
}
