import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';

const {Resi} = images;

const OvertimeDetail = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <Header title="Detail Overtime" />
      <View style={{paddingHorizontal: 24}}>
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
              <TextBody style={{color: COLORS.black}} title="Date" />
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
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Start Time" />
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
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="End Time" />
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
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Reason" />
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
              <TextBody style={{color: COLORS.black}} title="Attachment" />
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
