import {View, Text, TouchableOpacity} from 'react-native';
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

const {Google, Apple} = images;

const Login = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 24,
      }}>
      <View style={{marginTop: 100}}>
        <TextHeader style={{fontSize: 24}} title={'Hello\nWelcome Back !'} />
        <TextBody
          style={{
            fontSize: 24,
            marginTop: 10,
            color: colors.textTitle,
            paddingVertical: 5,
          }}
          title="Lets sign you in"
        />
        <TextInputCustom
          styleContainer={{marginTop: 47}}
          placeholder="Enter Email"
          keyboardType="email-address"
          label={'Email'}
        />
        <TextInputCustom
          styleContainer={{marginTop: 25}}
          placeholder="Password"
          label={'Password'}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{alignSelf: 'flex-end'}}>
          <TextBody title="Forgot password" />
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          styleContainer={{marginTop: 36}}
          title="Login"
        />
        <TextBody
          style={{textAlign: 'center', marginTop: 20, color: colors.textTitle}}
          title="Or"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: COLORS.white,
              borderRadius: 12,
              flexDirection: 'row',
              paddingVertical: 12,
              height: 55,
              marginRight: 10,
            }}>
            <Google />
            <TextBody
              style={{marginLeft: 10, color: COLORS.black}}
              title="Google"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              backgroundColor: '#343434',
              borderColor: '#343434',
              borderRadius: 12,
              flexDirection: 'row',
              paddingVertical: 12,
              height: 55,
              marginLeft: 10,
            }}>
            <Apple />
            <TextBody
              style={{marginLeft: 10, color: COLORS.white}}
              title="Google"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 41, alignSelf: 'center'}}>
          <TextBody title="Not Registered yet?" />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{marginLeft: 10}}>
            <TextBody
              style={{color: COLORS.primary.satu}}
              title="Create an Account"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
