import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextHeader, TextTitle} from '../../atom/Text';
import {COLORS} from '../../../constant';

const InboxCard = ({title, date, isRead, styleContainer, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.lightGray2,
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
            backgroundColor: COLORS.black,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default InboxCard;
