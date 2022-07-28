import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';
import formatNumber from '../../utils/function/formatNumber';
import moment from 'moment';

const {Resi} = images;

const CashAdvanceDetail = ({route}) => {
  const {data} = route.params;
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Detail Cash Advance" />
      <View style={{paddingHorizontal: 24}}>
        <View style={{alignItems: 'flex-end', marginTop: 35}}>
          <TextBody
            style={{color: colors.textTitle}}
            title="Cash Advance Nominal"
          />
          <TextTitle title={formatNumber(data.nominal || 0)} />
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
              <TextBody style={{color: colors.textTitle}} title="Date of Use" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title={moment(data.created_at).format('DD/MM/YYYY')} />
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
              <TextBody style={{color: colors.textTitle}} title="Policy Name" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title={data.policy} />
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
              <TextBody style={{color: colors.textTitle}} title="Reason" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody style={{textAlign: 'right'}} title={data.description} />
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: colors.textTitle}} title="Attachment" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Image source={Resi} style={{width: 115, height: 115}} />
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default CashAdvanceDetail;
