import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import {TextTitle} from './Text';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../../router/Router';

const {ArrowLeft, ArrowLeftWhite} = icons;

const Header = ({title}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {theme} = React.useContext(ThemeContext);

  return (
    <View
      style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: colors.background,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {theme === 'light' ? <ArrowLeft /> : <ArrowLeftWhite />}
      </TouchableOpacity>
      <TextTitle style={{marginLeft: 10}} title={title} />
    </View>
  );
};

export default Header;
