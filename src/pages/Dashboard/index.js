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
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} />
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
            backgroundColor: COLORS.primary.satu,
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
          <MenuItem title={'Reimbursment'} icon={<Reimbursment />} />
          <MenuItem title={'Overtime'} icon={<Overtime />} />
          <MenuItem title={'Payslip'} icon={<Payslip />} />
        </View>
        {/* Menu Close */}

        {/* Menu 2 Start */}
        <View
          style={{
            marginHorizontal: 17,
            flexDirection: 'row',
            marginTop: 26,
          }}>
          <SubmenuItem title="Permission" icon={<Permission />} />
          <SubmenuItem title="Time Off" icon={<TimeOff />} />
          <SubmenuItem title="Calender" icon={<Calender />} />
          <SubmenuItem title="File" icon={<File />} />
          <SubmenuItem title="Other" icon={<Other />} />
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
