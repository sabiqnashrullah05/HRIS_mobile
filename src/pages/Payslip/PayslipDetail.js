import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';

import {COLORS} from '../../constant';
import {Header, TextBody, TextHeader, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const PayslipDetail = () => {
  const [selected, setSelected] = React.useState('Salary');
  const {colors} = useTheme();

  const data = [
    {
      _id: 1,
      title: 'Salary',
      amount: 'Rp 2.000.000',
    },
    {
      _id: 2,
      title: 'Deductions',
      amount: 'Rp 79.000',
    },
  ];
  const List = ({keyTitle, valueTitle, primary}) => {
    return (
      <View style={{flexDirection: 'row', paddingVertical: 8}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextBody
            style={{color: primary ? COLORS.primary.satu : colors.textBody}}
            title={keyTitle}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextBody
            style={{color: primary ? COLORS.primary.satu : colors.textBody}}
            title={valueTitle}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Detail Payslip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <ProgressCircle
            percent={75}
            radius={140}
            borderWidth={18}
            color={COLORS.darkBlue}
            shadowColor={colors.card}
            bgColor={colors.background2}>
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
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setSelected(item.title)}
                key={item._id}
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
                    backgroundColor:
                      item.title === selected
                        ? COLORS.darkBlue
                        : COLORS.lightGray2,
                    marginTop: 7,
                    marginRight: 10,
                  }}
                />
                <View>
                  <TextTitle title={item.amount} />
                  <TextBody title={item.title} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Salary Detail */}
        <View style={{paddingHorizontal: 24, marginVertical: 30}}>
          <TextTitle title={`${selected} Detail`} />
          <View
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 20,
              paddingVertical: 12,
              marginTop: 20,
              borderRadius: 12,
            }}>
            {selected === 'Salary' ? (
              <>
                <List keyTitle="Basic salary" valueTitle="Rp 2.000.000" />
                <List keyTitle="Allowance 1" valueTitle="Rp 200.000" />
                <List keyTitle="Allowance 2" valueTitle="Rp 200.000" />
                <List keyTitle="Allowance 3" valueTitle="Rp 221.000" />
                <List keyTitle="Allowance 4" valueTitle="Rp 300.000" />
                <List
                  primary
                  keyTitle="Total Salary"
                  valueTitle="Rp 2.921.000"
                />
              </>
            ) : (
              <>
                <List keyTitle="BPJS Ketenagakerjaan" valueTitle="Rp 59.000" />
                <List keyTitle="BPJS Kesehatan" valueTitle="Rp 19.000" />
                <List
                  primary
                  keyTitle="Total Deductions"
                  valueTitle="Rp 79.000"
                />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayslipDetail;
