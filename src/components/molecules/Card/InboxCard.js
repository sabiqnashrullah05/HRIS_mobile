import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextHeader, TextTitle} from '../../atom/Text';
import {COLORS} from '../../../constant';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../../../router/Router';

const InboxCard = ({title, date, isRead, styleContainer, onPress}) => {
  const {colors} = useTheme();
  const {theme} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        backgroundColor: colors.card,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        ...styleContainer,
      }}>
      <View style={{flex: 1, marginRight: 10}}>
        <TextTitle title={title} />
        <TextBody title={date} />
      </View>
      {!isRead && (
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: theme === 'light' ? COLORS.black : COLORS.darkBlue,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default InboxCard;
