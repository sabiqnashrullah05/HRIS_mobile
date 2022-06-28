import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {UserProfile} = images;

const InboxDetail = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header />
      <View style={{paddingHorizontal: 24}}>
        <TextTitle style={{marginTop: 30}} title="Run Payroll" />
        {/* Header Start */}
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UserProfile width={40} height={40} />
            <View style={{marginLeft: 18}}>
              <TextTitle title="HRIS" />
              <TextBody title="to me" />
            </View>
          </View>

          <View style={{marginLeft: 22}}>
            <TextBody title="Mei 30, 2022, 10:30" />
          </View>
        </View>
        {/* Header Close */}
        <View
          style={{
            backgroundColor: colors.card,
            paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 8,
            marginTop: 15,
          }}>
          <TextBody
            style={{color: colors.textTitle}}
            title="Your Payroll calculation process for 03-2022 
completed"
          />
        </View>
      </View>
    </View>
  );
};

export default InboxDetail;
