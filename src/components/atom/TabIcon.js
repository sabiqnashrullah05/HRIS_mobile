import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {TextBody} from './Text';

const TabIcon = ({focused, icon, title}) => {
  // console.log('focused', focused);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
      }}>
      {icon}

      <TextBody
        style={{
          color: focused ? COLORS.primary.satu : '#A3A3A3',
        }}
        title={title}
      />
    </View>
  );
};

export default TabIcon;
