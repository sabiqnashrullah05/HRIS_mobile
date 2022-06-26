import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, Tags, TextBody, TextTitle} from '../../components';

const {Plus} = icons;

const Permission = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Permission" />
      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <TextTitle title="Activity Log" />
            <TextBody title="4 Data" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('LateArrivalPermit')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Permission"
            />
          </TouchableOpacity>
        </View>

        {/* Card Start */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LateArrivalPermitDetail')}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: COLORS.lightGray2,
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
            borderColor: COLORS.lightGray2,
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
            borderColor: COLORS.lightGray2,
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
            borderColor: COLORS.lightGray2,
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

export default Permission;
