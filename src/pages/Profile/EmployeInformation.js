import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextHeader, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {UserProfile} = images;

const EmployeInformation = () => {
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
      <Header title="Employee Information" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextTitle style={{marginTop: 20}} title="Personal Information" />
        {/* display profile */}
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <UserProfile width={59} height={59} />
          <View style={{marginLeft: 20}}>
            <TextHeader title="Kylie Jenner" />
            <TextBody
              style={{fontSize: 14, color: colors.textTitle}}
              title="Kylee.jen@gmail.com"
            />
          </View>
        </View>

        {/* display information */}
        <View
          style={{
            backgroundColor: colors.card,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
            marginTop: 20,
          }}>
          <List keyTitle="Phone Numbare" valuetitle="081271076754" />
          <List keyTitle="Address" valuetitle="Surabaya - Indonesia" />
        </View>

        {/* display Employment Information */}
        <TextBody
          style={{marginTop: 20, marginBottom: 10}}
          title="Employment Information"
        />
        <View
          style={{
            backgroundColor: colors.card,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Barcode" valuetitle="XXXXXX" />
          <List keyTitle="Employee Status" valuetitle="Contract" />
          <List keyTitle="Length of Contract" valuetitle="3 Month" />
          <List keyTitle="Division" valuetitle="IT" />
          <List keyTitle="Job Position" valuetitle="Network Support" />
          <List keyTitle="Staff Position" valuetitle="Staff IT" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EmployeInformation;
