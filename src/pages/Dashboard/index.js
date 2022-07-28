import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS, images, icons} from '../../constant';
import {
  MenuItem,
  TextBody,
  TextTitle,
  SubmenuItem,
  TextHeader,
  AnnouncementCard,
} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getReimbursment} from '../../redux/action/reimbursmentAction';
import {getAttendance} from '../../redux/action/attendanceAction';
import {getOvertime} from '../../redux/action/overtimeAction';
import {getTimeoff} from '../../redux/action/timeoffAction';
import {getTransfer} from '../../redux/action/transferAction';
import {getCashAdvance} from '../../redux/action/cashAdvanceAction';
import {getLoan} from '../../redux/action/loanAction';
import {getResign} from '../../redux/action/resignAction';
import {getAsset} from '../../redux/action/assetAction';
import {getReprimand} from '../../redux/action/reprimandAction';
import {getCompanyFile} from '../../redux/action/companyFileAction';
import {getEmployeeFile} from '../../redux/action/employeeFileAction';

const {UserProfile} = images;
const {
  LiveAttendance,
  Calender,
  File,
  Other,
  Overtime,
  Payslip,
  Permission,
  Reimbursment,
  TimeOff,
} = icons;

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  console.log('user ======>', user);
  const {colors} = useTheme();
  const themes = useTheme();

  React.useEffect(() => {
    const data = {
      id: user?.id,
    };
    Promise.all([
      dispatch(getReimbursment(data)),
      dispatch(getAttendance(data)),
      dispatch(getOvertime(data)),
      dispatch(getTimeoff(data)),
      dispatch(getTransfer(data)),
      dispatch(getCashAdvance(data)),
      dispatch(getLoan(data)),
      dispatch(getResign(data)),
      dispatch(getAsset(data)),
      dispatch(getReprimand(data)),
      dispatch(getCompanyFile(data)),
      dispatch(getEmployeeFile(data)),
    ]);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar
        translucent={false}
        barStyle={themes.barContent}
        backgroundColor={colors.background}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Start */}
        <View
          style={{
            marginTop: 70,
            paddingHorizontal: 37,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <TextHeader title={'Hello,\nKylie Jenner'} />
            <TextBody title="it's Monday, 21 Februari 2022" />
          </View>
          <View>
            <UserProfile />
          </View>
        </View>
        {/* Header Close */}

        {/* Menu Start */}
        <View
          style={{
            backgroundColor: colors.primary,
            borderRadius: 15,
            marginHorizontal: 17,
            flexDirection: 'row',
            marginTop: 26,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <MenuItem
            onPress={() => navigation.navigate('LiveAttendance')}
            title={'Live\nAttendance'}
            icon={<LiveAttendance />}
          />
          <MenuItem
            // styleText={{fontSize: 9}}
            onPress={() => navigation.navigate('Reimbursment')}
            title={'Reimbursment'}
            icon={<Reimbursment />}
          />
          <MenuItem
            onPress={() => navigation.navigate('Overtime')}
            title={'Overtime'}
            icon={<Overtime />}
          />
          <MenuItem
            onPress={() => navigation.navigate('Payslip')}
            title={'Payslip'}
            icon={<Payslip />}
          />
        </View>
        {/* Menu Close */}

        {/* Menu 2 Start */}
        <View
          style={{
            marginHorizontal: 17,
            flexDirection: 'row',
            marginTop: 26,
          }}>
          <SubmenuItem
            onPress={() => navigation.navigate('Permission')}
            title="Permission"
            // styleText={{fontSize: 9}}
            icon={<Permission />}
          />
          <SubmenuItem
            onPress={() => navigation.navigate('Timeoff')}
            title="Time Off"
            icon={<TimeOff />}
          />
          <SubmenuItem
            onPress={() => navigation.navigate('Calender')}
            title="Calender"
            icon={<Calender />}
          />
          <SubmenuItem
            onPress={() => navigation.navigate('File')}
            title="File"
            icon={<File />}
          />
          <SubmenuItem
            onPress={() => navigation.navigate('OtherMenu')}
            title="Other"
            icon={<Other />}
          />
        </View>
        {/* Menu 2 Close */}

        {/* Section - Announcement Start */}
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 9,
          }}>
          <TextTitle title="Announcement" />
          <TouchableOpacity onPress={() => navigation.navigate('Announcement')}>
            <TextBody style={{color: COLORS.darkBlue}} title="View All" />
          </TouchableOpacity>
        </View>
        {/* Section - Announcement Close */}

        {/* Card Announcement Start */}
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />

        {/* Card Announcement Close */}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
