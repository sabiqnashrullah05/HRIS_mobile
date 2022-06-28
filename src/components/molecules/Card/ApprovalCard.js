import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from '../../atom/Text';
import {COLORS} from '../../../constant';
import {useTheme} from '@react-navigation/native';

const ApprovalCard = ({
  onPress,
  type,
  title,
  date,
  description,
  styleContainer,
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
        borderRadius: 12,
        ...styleContainer,
      }}>
      <TextTitle title={title} />
      <TextBody title={date} />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.border,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 7,
            height: 47,
            borderRadius: 5,
            backgroundColor:
              type === 'Approved'
                ? COLORS.green
                : type === 'Rejected'
                ? COLORS.red
                : COLORS.yellow,
          }}
        />
        <View style={{flex: 1}}>
          <TextBody
            style={{color: colors.textTitle, marginLeft: 10}}
            title={description}
          />
        </View>
        <TextBody
          style={{
            color:
              type === 'Approved'
                ? COLORS.green
                : type === 'Rejected'
                ? COLORS.red
                : COLORS.yellow,
            marginRight: 10,
          }}
          title={
            type === 'Approved'
              ? 'Approved'
              : type === 'Rejected'
              ? 'Rejected'
              : 'Pending'
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default ApprovalCard;
