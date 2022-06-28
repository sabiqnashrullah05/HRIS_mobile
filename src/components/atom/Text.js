import {View, Text} from 'react-native';
import React from 'react';
import {FONTS, COLORS, SIZES} from '../../constant';
import {useTheme} from '@react-navigation/native';

const TextHeader = ({title, style}) => {
  const {colors} = useTheme();

  return (
    <Text
      style={{
        ...FONTS.h2,
        color: colors.textTitle,
        ...style,
      }}>
      {title}
    </Text>
  );
};

const TextTitle = ({title, style}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={{
        ...FONTS.h3,
        color: colors.textTitle,
        ...style,
      }}>
      {title}
    </Text>
  );
};
const TextBody = ({title, style}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={{
        ...FONTS.body5,
        color: colors.textBody,
        ...style,
      }}>
      {title}
    </Text>
  );
};

export {TextHeader, TextTitle, TextBody};
