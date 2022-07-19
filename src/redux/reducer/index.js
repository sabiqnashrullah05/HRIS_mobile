import {combineReducers} from 'redux';
import attendanceReducer from './attendanceReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducers';
import overtimeReducer from './overtimeReducer';
import profileReducer from './profileReducer';
import reimbursmentReducer from './reimbursmentReducer';
import timeoffReducer from './timeoffReducer';
import transferReducer from './transferReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  errors: errorReducer,
  reimbursment: reimbursmentReducer,
  attendance: attendanceReducer,
  timeoff: timeoffReducer,
  overtime: overtimeReducer,
  transfer: transferReducer,
});
