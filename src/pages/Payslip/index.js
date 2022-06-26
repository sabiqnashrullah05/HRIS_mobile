import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, PayslipCard, TextBody, TextTitle} from '../../components';

const Payslip = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Payslip" />
      <View style={{paddingHorizontal: 24}}>
        <PayslipCard
          onPress={() => navigation.navigate('PayslipDetail')}
          title="January"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 30}}
        />
        <PayslipCard
          onPress={() => navigation.navigate('PayslipDetail')}
          title="February"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
        <PayslipCard
          onPress={() => navigation.navigate('PayslipDetail')}
          title="March"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
        <PayslipCard
          onPress={() => navigation.navigate('PayslipDetail')}
          title="April"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
        <PayslipCard
          onPress={() => navigation.navigate('PayslipDetail')}
          title="May"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
      </View>
    </View>
  );
};

export default Payslip;
