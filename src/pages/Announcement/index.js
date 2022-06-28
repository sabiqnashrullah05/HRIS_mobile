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
import {useTheme} from '@react-navigation/native';

const {ArrowLeft} = icons;

const Announcement = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
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
