const BASE_URL = 'https://hris.afkaaruna.sch.id/';

const URIS = {
  // ================================= authentikasi
  REGISTER: 'createAccount',
  LOGIN: 'postLogin',

  // ================================= dashboard
  // transfer
  GET_TRANSFER: 'getTransferByUser',

  // reimbursment
  GET_REIMBURSMENT: 'getReimbursementByUser',
  CREATE_REIMBURSMENT: 'createReimbursement',

  // timeoff
  GET_TIMEOFF: 'getTimeoffByUser',

  // attendance
  GET_ATTENDANCE: 'getAttendanceByUser',
  CREATE_ATTENDANCE: 'createAttendance',

  // overtime
  GET_OVERTIME: 'getOvertimeByUser',

  GET_CASH_ADVANCE: 'getCashAdvanceByUser',
  CREATE_CASH_ADVANCE: 'createCashAdvance',

  GET_LOAN: 'getLoanByUser',
  GET_RESIGN: 'getResignByUser',
  GET_ASSET: 'getAssetByUser',
  GET_REPRIMAND: 'getReprimandByUser',
  GET_COMPANY_FILE: 'getCompanyFileByUser',
  GET_EMPLOYEE_FILE: 'getEmployeeFileByUser',
};

export {BASE_URL, URIS};
