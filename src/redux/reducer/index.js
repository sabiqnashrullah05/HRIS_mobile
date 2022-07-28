import {combineReducers} from 'redux';
import assetReducer from './assetReducer';
import attendanceReducer from './attendanceReducer';
import authReducer from './authReducer';
import cashAdvanceReducer from './cashAdvanceReducer';
import companyFileReducer from './companyFileReducer';
import employeeFileReducer from './employeeFileReducer';
import errorReducer from './errorReducers';
import loanReducer from './loanReducer';
import overtimeReducer from './overtimeReducer';
import profileReducer from './profileReducer';
import reimbursmentReducer from './reimbursmentReducer';
import reprimandReducer from './reprimandReducer';
import resignReducer from './resignReducer';
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
  cashAdvance: cashAdvanceReducer,
  loan: loanReducer,
  resign: resignReducer,
  asset: assetReducer,
  reprimand: reprimandReducer,
  company: companyFileReducer,
  employee: employeeFileReducer,
});
