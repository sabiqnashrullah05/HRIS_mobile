import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, Tags, TextBody, TextTitle} from '../../components';
import {useNavigation, useTheme} from '@react-navigation/native';

const {Plus} = icons;

const PermissionLate = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        {/* Card Start */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LateArrivalPermitDetail')}
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
              <TextTitle title="Ban Bocor" />
              <TextBody style={{marginTop: 10}} title="03/03/2022" />
            </View>
            <Tags type="Approved" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LateArrivalPermitDetail')}
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
              <TextTitle title="Ban Bocor" />
              <TextBody style={{marginTop: 10}} title="03/03/2022" />
            </View>
            <Tags type="Rejected" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LateArrivalPermitDetail')}
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
              <TextTitle title="Ban Bocor" />
              <TextBody style={{marginTop: 10}} title="03/03/2022" />
            </View>
            <Tags type="Approved" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LateArrivalPermitDetail')}
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
              <TextTitle title="Ban Bocor" />
              <TextBody style={{marginTop: 10}} title="03/03/2022" />
            </View>
            <Tags type="Pending" />
          </View>
        </TouchableOpacity>

        {/* Card End */}
      </View>
    </View>
  );
};

export default PermissionLate;
