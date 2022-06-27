import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {
  Announcement,
  Attendance,
  Calender,
  CashAdvance,
  CashAdvanceDetail,
  CashAdvanceRequest,
  Dashboard,
  File,
  IzinKeluarKantor,
  IzinKeluarKantorDetail,
  LateArrivalPermit,
  LateArrivalPermitDetail,
  LiveAttendance,
  Loan,
  LoanDetail,
  LoanRequest,
  OtherMenu,
  Overtime,
  OvertimeDetail,
  OvertimeRequest,
  Payslip,
  PayslipDetail,
  Permission,
  Reimbursment,
  ReimbursmentDetail,
  ReimbursmentRequest,
  Schedule,
  SickLeave,
  SickLeaveDetail,
  Timeoff,
  TimeoffDetail,
  TimeoffRequest,
} from '../../pages';

const HomeStack = createStackNavigator();

const DashboardRouter = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
      <HomeStack.Screen name="OtherMenu" component={OtherMenu} />
      <HomeStack.Screen name="Announcement" component={Announcement} />
      <HomeStack.Screen name="LiveAttendance" component={LiveAttendance} />
      <HomeStack.Screen name="Reimbursment" component={Reimbursment} />
      <HomeStack.Screen
        name="ReimbursmentRequest"
        component={ReimbursmentRequest}
      />
      <HomeStack.Screen
        name="ReimbursmentDetail"
        component={ReimbursmentDetail}
      />
      <HomeStack.Screen name="Overtime" component={Overtime} />
      <HomeStack.Screen name="OvertimeRequest" component={OvertimeRequest} />
      <HomeStack.Screen name="OvertimeDetail" component={OvertimeDetail} />

      <HomeStack.Screen name="CashAdvance" component={CashAdvance} />
      <HomeStack.Screen
        name="CashAdvanceRequest"
        component={CashAdvanceRequest}
      />
      <HomeStack.Screen
        name="CashAdvanceDetail"
        component={CashAdvanceDetail}
      />
      <HomeStack.Screen name="Permission" component={Permission} />
      <HomeStack.Screen name="IzinKeluarKantor" component={IzinKeluarKantor} />
      <HomeStack.Screen name="SickLeave" component={SickLeave} />
      <HomeStack.Screen
        name="LateArrivalPermit"
        component={LateArrivalPermit}
      />
      <HomeStack.Screen
        name="LateArrivalPermitDetail"
        component={LateArrivalPermitDetail}
      />
      <HomeStack.Screen
        name="IzinKeluarKantorDetail"
        component={IzinKeluarKantorDetail}
      />
      <HomeStack.Screen name="SickLeaveDetail" component={SickLeaveDetail} />
      <HomeStack.Screen name="File" component={File} />
      <HomeStack.Screen name="Loan" component={Loan} />
      <HomeStack.Screen name="LoanRequest" component={LoanRequest} />
      <HomeStack.Screen name="LoanDetail" component={LoanDetail} />
      <HomeStack.Screen name="Attendance" component={Attendance} />
      <HomeStack.Screen name="Timeoff" component={Timeoff} />
      <HomeStack.Screen name="TimeoffRequest" component={TimeoffRequest} />
      <HomeStack.Screen name="TimeoffDetail" component={TimeoffDetail} />
      <HomeStack.Screen name="Payslip" component={Payslip} />
      <HomeStack.Screen name="PayslipDetail" component={PayslipDetail} />
      <HomeStack.Screen name="Calender" component={Calender} />
      <HomeStack.Screen name="Schedule" component={Schedule} />
    </HomeStack.Navigator>
  );
};

export default DashboardRouter;
