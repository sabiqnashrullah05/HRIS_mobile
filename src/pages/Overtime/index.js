import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, Tags, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Plus} = icons;

const Overtime = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Overtime" />
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
            onPress={() => navigation.navigate('OvertimeRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Overtime"
            />
          </TouchableOpacity>
        </View>

        {/* Card Start */}
        <TouchableOpacity
          onPress={() => navigation.navigate('OvertimeDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <TextTitle title="03/03/2022" />
              <TextBody
                style={{marginTop: 10}}
                title="Mengerjakan Frontend Website"
              />
            </View>
            <Tags type="Approved" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('OvertimeDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <TextTitle title="03/03/2022" />
              <TextBody style={{marginTop: 10}} title="Merevisi database" />
            </View>
            <Tags type="Rejected" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('OvertimeDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: colors.border,
            backgroundColor: colors.card,
            marginTop: 21,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <TextTitle title="03/03/2022" />
              <TextBody
                style={{marginTop: 10}}
                title="Melanjutkan design untuk HRIS"
              />
            </View>
            <Tags type="Pending" />
          </View>
        </TouchableOpacity>

        {/* Card End */}
      </View>
    </View>
  );
};

export default Overtime;
