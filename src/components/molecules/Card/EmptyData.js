import {View, Text} from 'react-native';
import React from 'react';
import {TextTitle} from '../../atom/Text';

const EmptyData = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}>
      <TextTitle title="Belum ada data" />
    </View>
  );
};

export default EmptyData;
