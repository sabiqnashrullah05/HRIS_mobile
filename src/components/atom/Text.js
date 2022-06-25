import {View, Text} from 'react-native';
import React from 'react';
import {FONTS, COLORS, SIZES} from '../../constant';

const TextHeader = ({title, style}) => {
  return (
    <Text
      style={{
        ...FONTS.h2,
        color: COLORS.black,
        ...style,
      }}>
      {title}
    </Text>
  );
};

const TextTitle = ({title, style}) => {
  return (
    <Text
      style={{
        ...FONTS.h3,
        color: COLORS.black,
        ...style,
      }}>
      {title}
    </Text>
  );
};
const TextBody = ({title, style}) => {
  return (
    <Text
      style={{
        ...FONTS.body5,
        color: COLORS.gray,
        ...style,
      }}>
      {title}
    </Text>
  );
};

export {TextHeader, TextTitle, TextBody};
