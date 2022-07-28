import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {
  EmptyData,
  Header,
  PayslipCard,
  TextBody,
  TextTitle,
} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Payslip = ({navigation}) => {
  const {colors} = useTheme();

  const {data} = useSelector(state => state.transfer);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Payslip" />
      <View style={{paddingHorizontal: 24}}>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <PayslipCard
                orange
                onPress={() => navigation.navigate('PayslipDetail')}
                title="January"
                date="29/12/2021 - 28/01/2022"
                amount="Rp. 3.000.000"
                styleContainer={{marginTop: 30}}
              />
            );
          }}
          ListEmptyComponent={<EmptyData />}
        />
      </View>
    </View>
  );
};

export default Payslip;
