import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, icons} from '../../constant';
import {
  AttendanceCard,
  EmptyData,
  Header,
  TextBody,
  TextHeader,
  TextTitle,
} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const {ArrowLeftGray, ArrowRightGray} = icons;

const Attendance = () => {
  const {data} = useSelector(state => state.attendance);

  console.log('data attendance', data);
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Attendance" />
      {/* Header Indicator Start */}
      {data.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 24,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity>
            <ArrowLeftGray />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              marginHorizontal: 10,
              alignItems: 'baseline',
            }}>
            <TextBody title="January" />
            <View>
              <TextHeader title="February" />
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                colors={[COLORS.primary.satu, COLORS.primary.tiga]}
                style={{
                  width: 30,
                  height: 4,
                }}
              />
            </View>

            <TextBody title="March" />
          </View>
          <TouchableOpacity>
            <ArrowRightGray />
          </TouchableOpacity>
        </View>
      )}

      {/* Header Indicator Close */}
      {/* Card Start */}
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <AttendanceCard
              data={item}
              styleContainer={{
                marginTop: index === 0 ? 34 : 10,
                marginBottom: 10,
              }}
            />
          );
        }}
        ListEmptyComponent={<EmptyData />}
      />

      {/* Card Close */}
    </View>
  );
};

export default Attendance;
