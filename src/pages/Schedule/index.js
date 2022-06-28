import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, ScheduleCard, TextTitle} from '../../components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useTheme} from '@react-navigation/native';

const Schedule = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Schedule" />
      <View
        style={{
          marginHorizontal: 24,
          marginVertical: 20,
          marginTop: 30,
          borderRadius: 22,
          overflow: 'hidden',
        }}>
        <Calendar
          markingType={'period'}
          markedDates={{
            '2022-06-01': {
              textColor: COLORS.white,
              color: COLORS.red,
              startingDay: true,
            },
            '2022-06-02': {
              textColor: COLORS.white,
              color: COLORS.red,
              selected: true,
            },
            '2022-06-03': {
              textColor: COLORS.white,
              color: COLORS.red,
              endingDay: true,
            },
            '2022-06-14': {
              textColor: COLORS.white,
              color: COLORS.darkBlue,
              startingDay: true,
            },
            '2022-06-15': {
              textColor: COLORS.white,
              color: COLORS.darkBlue,
              selected: true,
            },
            '2022-06-16': {
              textColor: COLORS.white,
              color: COLORS.darkBlue,
              endingDay: true,
            },
          }}
          style={{borderRadius: 22}}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}>
        <TextTitle title="June Schedule" />

        <ScheduleCard
          primary
          title="Work From Home Schedule"
          time="1 June - 3 June"
        />
        <ScheduleCard
          title="Work From Office Schedule"
          time="14 June - 16 June"
        />
      </ScrollView>
    </View>
  );
};

export default Schedule;
