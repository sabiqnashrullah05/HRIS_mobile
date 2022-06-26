import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constant';

const Button = ({onPress, styleContainer, title, iconRight, secondary}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: secondary ? COLORS.lightGray2 : COLORS.primary.satu,
      paddingHorizontal: 25,
      paddingVertical: 12,
      borderRadius: 10,
      // width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: iconRight ? 'space-between' : 'center',
      // alignItems: 'center',

      ...styleContainer,
    },
    text: {
      ...FONTS.body3,
      color: COLORS.white,
      fontFamily: 'Nunito-Regular',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};

export default Button;
