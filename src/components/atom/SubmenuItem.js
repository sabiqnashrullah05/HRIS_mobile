import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody} from './Text';
import {COLORS} from '../../constant';
import {useTheme} from '@react-navigation/native';

const SubmenuItem = ({title, icon, onPress, styleText}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 0,
      }}>
      <View
        style={{
          backgroundColor: title === '' ? colors.background : colors.secondary,
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
          color: colors.textTitle,
          textAlign: 'center',
          fontSize: 10,
          lineHeight: 12,
          marginTop: 7,
          ...styleText,
        }}
        title={title}
      />
    </TouchableOpacity>
  );
};

export default SubmenuItem;
