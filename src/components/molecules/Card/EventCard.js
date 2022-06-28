import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from '../../atom/Text';
import {COLORS} from '../../../constant';
import {useTheme} from '@react-navigation/native';

const EventCard = ({onPress, date, day, title, time}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        marginTop: 15,
        backgroundColor: colors.card,
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.primary,
        }}>
        <TextBody style={{color: COLORS.white}} title={day} />
        <TextBody style={{color: COLORS.white}} title={date} />
      </View>
      <View style={{marginLeft: 20}}>
        <TextBody style={{color: colors.textTitle}} title={title} />
        <TextBody title={time} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
