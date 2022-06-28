import {View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import {TextBody, TextTitle} from '../../atom/Text';
import {COLORS} from '../../../constant';
import {useTheme} from '@react-navigation/native';

const AttendanceCard = ({styleContainer}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        backgroundColor: colors.card,
        borderRadius: 15,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        ...styleContainer,
      }}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.9]}
        colors={[COLORS.primary.satu, COLORS.darkBlue]}
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          backgroundColor: COLORS.primary.satu,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextTitle style={{color: COLORS.white}} title="01" />
        <TextTitle style={{color: COLORS.white}} title="Tue" />
      </LinearGradient>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <TextBody style={{color: colors.textTitle}} title="Clock In" />
        <TextTitle style={{color: COLORS.gray}} title="07:15" />
      </View>
      <View
        style={{width: 1, height: '70%', backgroundColor: COLORS.lightGray2}}
      />
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextBody style={{color: colors.textTitle}} title="Clock Out" />
        <TextTitle style={{color: COLORS.gray}} title="16:15" />
      </View>
    </TouchableOpacity>
  );
};

export default AttendanceCard;
