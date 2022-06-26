import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';

const {Resi} = images;

const LoanDetail = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <Header title="Detail Loan" />
      <View style={{paddingHorizontal: 24}}>
        <View style={{alignItems: 'flex-end', marginTop: 35}}>
          <TextBody style={{color: COLORS.black}} title="Personal Loan" />
          <TextTitle title="Rp. 1.000.000" />
        </View>
        <TextBody style={{marginTop: 17, marginBottom: 10}} title="Detail" />
        <View
          style={{
            paddingVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Date of use" />
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
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Installment" />
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
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Interest (%)" />
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
              <TextBody style={{color: COLORS.black}} title="Reason" />
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
