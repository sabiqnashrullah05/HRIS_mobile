import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, images, icons} from '../../../constant';
import {
  Button,
  TextBody,
  TextHeader,
  TextInputCustom,
  TextTitle,
} from '../../../components';

const {ForgotPasswordImage} = images;
const {ArrowLeft} = icons;

const ForgotPassword = ({navigation}) => {
  return (
    <View
      style={{flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginTop: 50}}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={{marginTop: 0}}>
        <View style={{marginBottom: 20}}>
          <ForgotPasswordImage />
        </View>
        <TextHeader style={{fontSize: 24}} title={'Forgot\nPassword?'} />
        <TextBody title="No worries, we’ll send you reset instructions" />
        <TextInputCustom
          styleContainer={{marginTop: 18}}
          placeholder="Email"
          keyboardType="email-address"
          label={'Email'}
        />

        <Button styleContainer={{marginTop: 21}} title="Sent Instructions" />
      </View>
    </View>
  );
};

export default ForgotPassword;
