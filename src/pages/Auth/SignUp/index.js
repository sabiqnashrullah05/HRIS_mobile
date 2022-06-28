import {View, ScrollView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {COLORS, images} from '../../../constant';
import {
  Button,
  TextBody,
  TextHeader,
  TextInputCustom,
  TextTitle,
} from '../../../components';
import {useTheme} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const {colors} = useTheme();
  const [checkBox, setCheckBox] = React.useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 24,
      }}>
      <View style={{marginTop: 100}}>
        <TextHeader
          style={{fontSize: 24}}
          title={'Create an Account\nto Start !'}
        />
        <TextBody
          style={{color: colors.textTitle}}
          title="Please fill in the form to continue"
        />
        <TextInputCustom
          styleContainer={{marginTop: 47}}
          placeholder="Full Name"
          keyboardType="email-address"
          label={'Email'}
        />
        <TextInputCustom
          styleContainer={{marginTop: 25}}
          placeholder="Email"
          keyboardType="email-address"
          label={'Email'}
        />
        <TextInputCustom
          styleContainer={{marginTop: 25}}
          placeholder="Phone Number"
          keyboardType="email-address"
          label={'Email'}
        />
        <TextInputCustom
          styleContainer={{marginTop: 25}}
          placeholder="Password"
          label={'Password'}
        />
        <View
          style={{flexDirection: 'row', marginTop: 41, alignItems: 'center'}}>
          <CheckBox
            tintColors={{true: COLORS.primary.satu}}
            value={checkBox}
            onValueChange={newValue => setCheckBox(newValue)}
          />
          <TextBody style={{fontSize: 12}} title="i agree to" />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{marginLeft: 5}}>
            <TextBody
              style={{color: COLORS.primary.satu, fontSize: 12}}
              title="Terms of Service and Privacy Policy"
            />
          </TouchableOpacity>
        </View>

        <Button styleContainer={{marginTop: 36}} title="Sign Up" />

        <View
          style={{flexDirection: 'row', marginTop: 41, alignSelf: 'center'}}>
          <TextBody title="Already have account?" />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{marginLeft: 10}}>
            <TextBody style={{color: COLORS.primary.satu}} title="Log in" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
