import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from '../../atom/Text';
import {COLORS} from '../../../constant';

const PayslipCard = ({onPress, styleContainer, title, date, amount}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(0, 0, 0, 0.09)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4.65,

        elevation: 4,
        padding: 12,
        borderRadius: 12,
        ...styleContainer,
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightGreen,
        }}></View>
      <View style={{flex: 1, marginLeft: 10}}>
        <TextTitle title={title} />
        <TextBody style={{fontSize: 10}} title={date} />
      </View>
      <TextTitle title={amount} />
    </TouchableOpacity>
  );
};

export default PayslipCard;
