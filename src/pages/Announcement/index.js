import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {AnnouncementCard, Header, TextTitle} from '../../components';

const {ArrowLeft} = icons;

const Announcement = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <StatusBar backgroundColor={COLORS.white} />
      <Header title="Announcement" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <AnnouncementCard styleContainer={{marginTop: 35}} />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </ScrollView>
    </View>
  );
};

export default Announcement;
