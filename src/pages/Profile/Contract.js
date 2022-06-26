import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';

const Contract = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="My Contract" />
      <View style={{paddingHorizontal: 24}}>
        <TextTitle style={{marginTop: 20}} title="Contract History" />
        <TextBody title="4 Data" />
        <TouchableOpacity
          onPress={() => navigation.navigate('ContractDetail')}
          style={{
            padding: 20,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.lightGray2,
            marginTop: 30,
          }}>
          <TextTitle title="Contract 1" />
          <TextBody title="17/07/2022" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContractDetail')}
          style={{
            padding: 20,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.lightGray2,
            marginTop: 15,
          }}>
          <TextTitle title="Contract 2" />
          <TextBody title="17/07/2022" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contract;
