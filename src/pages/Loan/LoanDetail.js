import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Resi} = images;

const LoanDetail = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Detail Loan" />
      <View style={{paddingHorizontal: 24}}>
        <View style={{alignItems: 'flex-end', marginTop: 35}}>
          <TextBody style={{color: colors.textTitle}} title="Personal Loan" />
          <TextTitle title="Rp. 1.000.000" />
        </View>
        <TextBody style={{marginTop: 17, marginBottom: 10}} title="Detail" />
        <View
          style={{
            paddingVertical: 10,
            backgroundColor: colors.card,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: colors.border,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: colors.textTitle}} title="Date of use" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="17/05.2022" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: colors.border,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: colors.textTitle}} title="Installment" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="3x" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: colors.border,
            }}>
            <View style={{flex: 1}}>
              <TextBody
                style={{color: colors.textTitle}}
                title="Interest (%)"
              />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="2%" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: colors.textTitle}} title="Reason" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody
                style={{textAlign: 'right'}}
                title="Peminjaman kebutuhan personal"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoanDetail;
