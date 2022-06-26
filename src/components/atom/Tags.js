import {View, Text} from 'react-native';
import React from 'react';
import {TextBody} from './Text';
import {COLORS} from '../../constant';

const Tags = ({type}) => {
  return (
    <View
      style={{
        backgroundColor:
          type === 'Approved'
            ? COLORS.lightGreen
            : type === 'Rejected'
            ? COLORS.lightRed
            : COLORS.lightYellow,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 16,
      }}>
      <Text
        style={{
          fontFamily: 'Nunito-Regular',
          fontSize: 12,
          color:
            type === 'Approved'
              ? COLORS.green
              : type === 'Rejected'
              ? COLORS.red
              : COLORS.yellow,
        }}>
        {type === 'Approved'
          ? 'Approved'
          : type === 'Rejected'
          ? 'Rejected'
          : 'Pending'}
      </Text>
    </View>
  );
};

export default Tags;
