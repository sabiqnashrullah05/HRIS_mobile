import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import {TextTitle} from './Text';

const {ArrowLeft} = icons;

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: COLORS.white,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </TouchableOpacity>
      <TextTitle style={{marginLeft: 10}} title={title} />
    </View>
  );
};

export default Header;
