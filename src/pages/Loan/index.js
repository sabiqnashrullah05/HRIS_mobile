import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {EmptyData, Header, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const {Plus} = icons;

const Loan = ({navigation}) => {
  const {colors} = useTheme();
  const {data} = useSelector(state => state.loan);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Loan" />
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
            onPress={() => navigation.navigate('LoanRequest')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Loan"
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
                onPress={() => navigation.navigate('LoanDetail')}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: colors.border,
                  backgroundColor: colors.card,
                  marginTop: 21,
                }}>
                <TextTitle style={{marginTop: 10}} title="Loan Name" />
                <TextBody title="03/03/2022" />
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

export default Loan;
