import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from '../../atom/Text';
import {COLORS, icons} from '../../../constant';
import {useTheme} from '@react-navigation/native';

const {CalenderPayslip} = icons;

const PayslipCard = ({
  onPress,
  styleContainer,
  title,
  date,
  amount,
  green,
  orange,
  violet,
  blue,
}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.card,
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
          backgroundColor: green
            ? '#F2FFFB'
            : orange
            ? '#FFF1E0'
            : violet
            ? '#FCF2FF'
            : blue
            ? '#ECF9FF'
            : '#FFF4FC',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CalenderPayslip
          fill={
            green
              ? COLORS.green
              : orange
              ? '#E4891A'
              : violet
              ? '#C461E4'
              : blue
              ? '#29BFFD'
              : '#F671CC'
          }
        />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <TextTitle title={title} />
        <TextBody style={{fontSize: 10}} title={date} />
      </View>
      <TextTitle title={amount} />
    </TouchableOpacity>
  );
};

export default PayslipCard;
