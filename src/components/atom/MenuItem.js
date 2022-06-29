import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from './Text';
import {COLORS} from '../../constant';

const MenuItem = ({title, icon, onPress, styleText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        // paddingHorizontal: 10,
      }}>
      {icon}
      <TextBody
        style={{
          color: COLORS.white,
          textAlign: 'center',
          fontSize: 10,
          lineHeight: 12,
          marginTop: 12,
          ...styleText,
        }}
        title={title}
      />
    </TouchableOpacity>
  );
};

export default MenuItem;
