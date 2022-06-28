import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, SubmenuItem} from '../../components';
import {useTheme} from '@react-navigation/native';

const {
  Permission,
  TimeOff,
  Attendance,
  Schedule,
  Calender,
  File,
  CashAdvance,
  Loan,
} = icons;

const OtherMenu = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Other Service" />
      <View style={{flexDirection: 'row'}}>
        <SubmenuItem
          onPress={() => navigation.navigate('Permission')}
          title="Permission"
          icon={<Permission />}
        />
        <SubmenuItem
          onPress={() => navigation.navigate('Timeoff')}
          title="Time Off"
          icon={<TimeOff />}
        />
        <SubmenuItem
          onPress={() => navigation.navigate('Attendance')}
          title="Attendance"
          icon={<Attendance />}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <SubmenuItem
          onPress={() => navigation.navigate('Schedule')}
          title="Schedule"
          icon={<Schedule />}
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
      </View>
      <View style={{flexDirection: 'row'}}>
        <SubmenuItem
          onPress={() => navigation.navigate('CashAdvance')}
          title="Cash Advance"
          icon={<CashAdvance />}
        />
        <SubmenuItem
          onPress={() => navigation.navigate('Loan')}
          title="Loan"
          icon={<Loan />}
        />
        <SubmenuItem title="" />
      </View>
    </View>
  );
};

export default OtherMenu;
