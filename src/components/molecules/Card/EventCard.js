import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from '../../atom/Text';
import {COLORS} from '../../../constant';

const EventCard = ({onPress, date, day, title, time}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.lightGray2,
        borderRadius: 12,
        marginTop: 15,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary.satu,
        }}>
        <TextBody style={{color: COLORS.white}} title={day} />
        <TextBody style={{color: COLORS.white}} title={date} />
      </View>
      <View style={{marginLeft: 20}}>
        <TextBody style={{color: COLORS.black}} title={title} />
        <TextBody title={time} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
