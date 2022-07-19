const BASE_URL = 'https://hris.afkaaruna.sch.id/';

const URIS = {
  // ================================= authentikasi
  REGISTER: 'createAccount',
  LOGIN: 'postLogin',

  // ================================= dashboard
  // transfer
  GET_TRANSFER: 'getTransfer',

  // reimbursment
  GET_REIMBURSMENT: 'getReimbursement',
  CREATE_REIMBURSMENT: 'createReimbursement',

  // timeoff
  GET_TIMEOFF: 'getTimeoff',

  // attendance
  GET_ATTENDANCE: 'getAttendance',
  CREATE_ATTENDANCE: 'createAttendance',

  // overtime
  GET_OVERTIME: 'getOvertime',
};

export {BASE_URL, URIS};
