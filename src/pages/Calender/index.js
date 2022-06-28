import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {EventCard, Header, TextBody, TextTitle} from '../../components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useTheme} from '@react-navigation/native';

const Calender = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Calender" />
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
            '2022-06-17': {
              textColor: COLORS.white,
              color: COLORS.black,
              startingDay: true,
              endingDay: true,
            },
            '2022-06-18': {
              textColor: COLORS.white,
              color: COLORS.black,
              startingDay: true,
              endingDay: true,
            },
            '2022-06-19': {
              textColor: COLORS.white,
              color: COLORS.black,
              startingDay: true,
              endingDay: true,
            },
          }}
          style={{borderRadius: 22}}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}>
        <TextTitle title="Event" />

        <EventCard
          title="Evaluation New Project"
          day="Fri"
          time="08:25 pm - 09:30 pm"
          date="17"
        />
        <EventCard
          title="Reporting"
          day="Sat"
          time="08:25 pm - 09:30 pm"
          date="18"
        />
        <EventCard
          title="Project Meeting"
          day="Sun"
          time="08:25 pm - 09:30 pm"
          date="19"
        />
      </ScrollView>
    </View>
  );
};

export default Calender;
