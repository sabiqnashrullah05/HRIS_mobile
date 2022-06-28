import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Plus} = icons;

const Reimbursment = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Reimbursment" />
      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <TextTitle title="Activity Log" />
            <TextBody title="2 Data" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ReimbursmentRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Reimbursment"
            />
          </TouchableOpacity>
        </View>

        {/* Card Start */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ReimbursmentDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <TextBody title="03/03/2022" />
          <TextTitle style={{marginTop: 10}} title="Medical Claim" />
          <TextTitle style={{marginTop: 10}} title="Rp. 100.000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ReimbursmentDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 14,
          }}>
          <TextBody title="03/03/2022" />
          <TextTitle style={{marginTop: 10}} title="Medical Claim" />
          <TextTitle style={{marginTop: 10}} title="Rp. 100.000" />
        </TouchableOpacity>
        {/* Card End */}
      </View>
    </View>
  );
};

export default Reimbursment;
