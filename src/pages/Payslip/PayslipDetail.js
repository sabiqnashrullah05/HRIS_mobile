import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';

import {COLORS} from '../../constant';
import {Header, TextBody, TextHeader, TextTitle} from '../../components';

const PayslipDetail = () => {
  const List = ({keyTitle, valueTitle, primary}) => {
    return (
      <View style={{flexDirection: 'row', paddingVertical: 8}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextBody
            style={{color: primary ? COLORS.primary.satu : COLORS.gray}}
            title={keyTitle}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextBody
            style={{color: primary ? COLORS.primary.satu : COLORS.gray}}
            title={valueTitle}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <Header title="Detail Payslip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <ProgressCircle
            percent={75}
            radius={140}
            borderWidth={18}
            color={COLORS.darkBlue}
            shadowColor={COLORS.lightGray2}
            bgColor={COLORS.white2}>
            <TextHeader title="Rp 3.000.000" />
            <TextBody title="Gross Pay" />
          </ProgressCircle>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: COLORS.darkBlue,
                marginTop: 7,
                marginRight: 10,
              }}
            />
            <View>
              <TextTitle title="Rp. 2.921.000" />
              <TextBody title="Salary" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: COLORS.lightGray2,
                marginTop: 7,
                marginRight: 10,
              }}
            />
            <View>
              <TextTitle title="Rp. 79.000" />
              <TextBody title="Deductions" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Salary Detail */}
        <View style={{paddingHorizontal: 24, marginVertical: 30}}>
          <TextTitle title="Salary Detail" />
          <View
            style={{
              backgroundColor: COLORS.white,
              paddingHorizontal: 20,
              paddingVertical: 12,
              marginTop: 20,
              borderRadius: 12,
            }}>
            <List keyTitle="Basic salary" valueTitle="Rp 2.000.000" />
            <List keyTitle="Allowance 1" valueTitle="Rp 200.000" />
            <List keyTitle="Allowance 2" valueTitle="Rp 200.000" />
            <List keyTitle="Allowance 3" valueTitle="Rp 221.000" />
            <List keyTitle="Allowance 4" valueTitle="Rp 300.000" />
            <List primary keyTitle="Total Salary" valueTitle="Rp 2.921.000" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayslipDetail;
