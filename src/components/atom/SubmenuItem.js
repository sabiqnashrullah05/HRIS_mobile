import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from './Text';
import {COLORS} from '../../constant';

const SubmenuItem = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          backgroundColor: title === '' ? COLORS.white : COLORS.darkBlue,
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon}
      </View>
      <TextBody
        style={{
          color: COLORS.black,
          textAlign: 'center',
          fontSize: 10,
          lineHeight: 12,
          marginTop: 7,
        }}
        title={title}
      />
    </TouchableOpacity>
  );
};

export default SubmenuItem;
