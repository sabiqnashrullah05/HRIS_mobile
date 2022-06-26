import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, icons} from '../../constant';
import {
  AttendanceCard,
  Header,
  TextBody,
  TextHeader,
  TextTitle,
} from '../../components';

const {ArrowLeftGray, ArrowRightGray} = icons;

const Attendance = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Attendance" />
      {/* Header Indicator Start */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 24,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity>
          <ArrowLeftGray />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'baseline',
          }}>
          <TextBody title="January" />
          <View>
            <TextHeader title="February" />
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              colors={[COLORS.primary.satu, COLORS.primary.tiga]}
              style={{
                width: 30,
                height: 4,
              }}
            />
          </View>

          <TextBody title="March" />
        </View>
        <TouchableOpacity>
          <ArrowRightGray />
        </TouchableOpacity>
      </View>
      {/* Header Indicator Close */}
      {/* Card Start */}
      <AttendanceCard styleContainer={{marginTop: 34}} />
      <AttendanceCard styleContainer={{marginTop: 15}} />
      <AttendanceCard styleContainer={{marginTop: 15}} />
      <AttendanceCard styleContainer={{marginTop: 15}} />
      <AttendanceCard styleContainer={{marginTop: 15}} />
      {/* Card Close */}
    </View>
  );
};

export default Attendance;
