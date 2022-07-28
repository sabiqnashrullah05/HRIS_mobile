import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {
  Header,
  Tags,
  TextBody,
  TextTitle,
  TextHeader,
  EmptyData,
} from '../../components';
import SemiCircleProgress from 'react-native-semi-circle-progress';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const {Plus} = icons;

const Timeoff = ({navigation}) => {
  const {colors} = useTheme();

  const {data} = useSelector(state => state.timeoff);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Time Off" />
      <View style={{alignItems: 'center', marginVertical: 30}}>
        <SemiCircleProgress
          prog
          percentage={80}
          interiorCircleColor={colors.background}
          progressColor={COLORS.red}
          progressShadowColor={colors.card}
          circleRadius={140}
          progressWidth={18}>
          <TextHeader title="8 Days" />
          <TextBody title="Available cuti tahunan" />
        </SemiCircleProgress>
      </View>

      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <TextTitle title="Time Off History" />
            <TextBody title={`${data.length} Data`} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('TimeoffRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Time Off"
            />
          </TouchableOpacity>
        </View>

        {/* Card Start */}
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('TimeoffDetail')}
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
                    <TextTitle title="Cuti Menikah" />
                    <TextBody style={{marginTop: 10}} title="17/07/2022" />
                  </View>
                  <Tags type="Approved" />
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={<EmptyData />}
        />

        {/* Card End */}
      </View>
    </View>
  );
};

export default Timeoff;
