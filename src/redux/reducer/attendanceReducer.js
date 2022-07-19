import {
  GET_ATTENDANCE,
  RESET_ATTENDANCE,
  RESET_TIME_ATTENDANCE,
  POST_ATTENDANCE,
  ATTENDANCE_IN,
  ATTENDANCE_OUT,
} from '../type';

const initialState = {
  data: [],
  isSucces: false,
  isError: false,
  timeIn: null,
  timeOut: null,
  isComplete: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ATTENDANCE:
      return {
        ...state,
        data: action.payload,
        isSucces: action.isSucces,
        isError: action.isError,
      };
    case POST_ATTENDANCE:
      return {
        ...state,
        isSucces: action.isSucces,
        isError: action.isError,
      };
    case ATTENDANCE_IN:
      return {
        ...state,
        timeIn: action.payload,
      };
    case ATTENDANCE_OUT:
      return {
        ...state,
        timeOut: action.payload,
        isComplete: true,
      };
    case RESET_TIME_ATTENDANCE:
      return {
        ...state,
        timeIn: null,
        timeOut: null,
        isComplete: false,
      };
    case RESET_ATTENDANCE:
      return {
        ...state,
        isSucces: false,
        isError: false,
      };

    default:
      return state;
  }
}
