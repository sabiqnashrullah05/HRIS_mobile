import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, PayslipCard, TextBody, TextTitle} from '../../components';
import {useTheme} from '@react-navigation/native';

const Payslip = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Payslip" />
      <View style={{paddingHorizontal: 24}}>
        <PayslipCard
          orange
          onPress={() => navigation.navigate('PayslipDetail')}
          title="January"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 30}}
        />
        <PayslipCard
          green
          onPress={() => navigation.navigate('PayslipDetail')}
          title="February"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
        <PayslipCard
          violet
          onPress={() => navigation.navigate('PayslipDetail')}
          title="March"
          date="29/12/2021 - 28/01/2022"
          amount="Rp. 3.000.000"
          styleContainer={{marginTop: 15}}
        />
        <PayslipCard
          blue
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
