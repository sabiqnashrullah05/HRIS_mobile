import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {InboxCard, TextBody, TextHeader, TextTitle} from '../../components';
import {COLORS} from '../../constant';
import {useTheme} from '@react-navigation/native';

const Inbox = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.background2,
      }}>
      <View style={{marginTop: 30}}>
        <TextHeader style={{fontSize: 24, marginBottom: 4}} title="Inbox" />
        <TextTitle title="1 New Inbox" />
        <TextBody title="2 Inboxes" />
      </View>

      <InboxCard
        onPress={() => navigation.navigate('InboxDetail')}
        isRead
        title="Run Payroll"
        date="17/07/2021"
        styleContainer={{marginTop: 44}}
      />
      <InboxCard
        onPress={() => navigation.navigate('InboxDetail')}
        title="Status change in Personal Loan"
        date="17/07/2021"
        styleContainer={{marginTop: 15}}
      />
      <InboxCard
        onPress={() => navigation.navigate('InboxDetail')}
        title="Your contract expires this month"
        date="17/07/2021"
        styleContainer={{marginTop: 15}}
      />
    </View>
  );
};

export default Inbox;
