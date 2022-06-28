import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Resi} = images;

const OvertimeDetail = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Detail Overtime" />
      <View style={{paddingHorizontal: 24}}>
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
              <TextBody style={{color: colors.textTitle}} title="Date" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="27/02.2022" />
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
              <TextBody style={{color: colors.textTitle}} title="Start Time" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="16:00" />
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
              <TextBody style={{color: colors.textTitle}} title="End Time" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="20:30" />
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
              <TextBody title="Pembelian Remote AC" />
            </View>
          </View>
          <View
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default OvertimeDetail;
