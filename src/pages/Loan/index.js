import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Plus} = icons;

const Loan = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Loan" />
      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <TextTitle title="Activity Log" />
            <TextBody title="4 Data" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('LoanRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Loan"
            />
          </TouchableOpacity>
        </View>

        {/* Card Start */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LoanDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <TextTitle style={{marginTop: 10}} title="Loan Name" />
          <TextBody title="03/03/2022" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoanDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <TextTitle style={{marginTop: 10}} title="Loan Name" />
          <TextBody title="03/03/2022" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoanDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <TextTitle style={{marginTop: 10}} title="Loan Name" />
          <TextBody title="03/03/2022" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoanDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <TextTitle style={{marginTop: 10}} title="Loan Name" />
          <TextBody title="03/03/2022" />
        </TouchableOpacity>

        {/* Card End */}
      </View>
    </View>
  );
};

export default Loan;
