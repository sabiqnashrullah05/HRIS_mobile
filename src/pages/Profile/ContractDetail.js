import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const ContractDetail = () => {
  const {colors} = useTheme();
  const List = ({keyTitle, valuetitle}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          paddingHorizontal: 10,
          paddingVertical: 12,
        }}>
        <TextBody style={{color: colors.textTitle}} title={keyTitle} />
        <TextBody title={valuetitle} />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Detail Contract" />
      <View
        style={{alignItems: 'flex-end', paddingHorizontal: 24, marginTop: 20}}>
        <TextTitle title="Contract 1" />
      </View>
      <View style={{paddingHorizontal: 24}}>
        <TextBody style={{marginTop: 20, marginBottom: 10}} title="Detail" />
        <View
          style={{
            backgroundColor: colors.card,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Join Date" valuetitle="17/02/2022" />
          <List keyTitle="End Date" valuetitle="17/05/2022" />
          <List keyTitle="Length of Contract" valuetitle="3 Month" />
          <List keyTitle="Division" valuetitle="IT Developmnt" />
          <List keyTitle="Job Position" valuetitle="Backend" />
          <List keyTitle="Job Level" valuetitle="Staff Junior 3" />
          <List keyTitle="MOU" valuetitle="" />
        </View>
      </View>
    </View>
  );
};

export default ContractDetail;
