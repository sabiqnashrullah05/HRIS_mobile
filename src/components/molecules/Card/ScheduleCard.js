import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from '../../atom/Text';
import {COLORS} from '../../../constant';
import {useTheme} from '@react-navigation/native';

const ScheduleCard = ({onPress, title, time, primary}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderBottomColor: colors.border,
        borderTopColor: colors.border,
        borderRightColor: colors.border,
        borderRadius: 12,
        marginTop: 15,
        backgroundColor: colors.card,
        borderLeftWidth: 10,
        borderLeftColor: primary ? COLORS.red : COLORS.darkBlue,
      }}>
      <View style={{marginLeft: 10}}>
        <TextBody style={{color: colors.textTitle}} title={title} />
        <TextBody title={time} />
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;
