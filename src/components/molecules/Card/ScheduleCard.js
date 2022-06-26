import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from '../../atom/Text';
import {COLORS} from '../../../constant';

const ScheduleCard = ({onPress, title, time, primary}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderBottomColor: COLORS.lightGray2,
        borderTopColor: COLORS.lightGray2,
        borderRightColor: COLORS.lightGray2,
        borderRadius: 12,
        marginTop: 15,
        backgroundColor: COLORS.white,
        borderLeftWidth: 10,
        borderLeftColor: primary ? COLORS.red : COLORS.darkBlue,
      }}>
      <View style={{marginLeft: 10}}>
        <TextBody style={{color: COLORS.black}} title={title} />
        <TextBody title={time} />
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;
