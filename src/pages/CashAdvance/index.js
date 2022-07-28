import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {EmptyData, Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import formatNumber from '../../utils/function/formatNumber';

const {Plus} = icons;

const CashAdvance = ({navigation}) => {
  const {colors} = useTheme();
  const {data} = useSelector(state => state.cashAdvance);
  console.log('data cash advance', data[0]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Cash Advance" />
      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <TextTitle title="Activity Log" />
            <TextBody title={`${data.length} data`} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('CashAdvanceRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Cash Advance"
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
                onPress={() =>
                  navigation.navigate('CashAdvanceDetail', {data: item})
                }
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: colors.border,
                  backgroundColor: colors.card,
                  marginTop: 21,
                }}>
                <TextBody
                  title={moment(item.created_at).format('DD/MM/YYYY')}
                />
                <TextTitle style={{marginTop: 10}} title={item.description} />
                <TextTitle
                  style={{marginTop: 10}}
                  title={formatNumber(item.nominal || 0)}
                />
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

export default CashAdvance;
