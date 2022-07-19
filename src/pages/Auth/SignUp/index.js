import {View, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {COLORS, images} from '../../../constant';
import {
  Button,
  TextBody,
  TextHeader,
  TextInputCustom,
} from '../../../components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, resetRegister} from '../../../redux/action/authAction';

const SignUp = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {isSucces} = useSelector(state => state.auth);

  const [checkBox, setCheckBox] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleOnchange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleRegister = () => {
    if (checkBox === false) {
      return ToastAndroid.show(
        'Silahkan di ceklis terlebih dahulu',
        ToastAndroid.SHORT,
      );
    }
    setLoading(true);
    dispatch(registerUser(form, navigation));
  };

  React.useEffect(() => {
    if (isSucces) {
      setLoading(false);
      dispatch(resetRegister());
    }
  }, [isSucces]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView
        contentContainerStyle={{
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
            value={form.name}
            onChangeText={value => handleOnchange(value, 'name')}
          />
          <TextInputCustom
            styleContainer={{marginTop: 25}}
            placeholder="Username"
            keyboardType="email-address"
            value={form.username}
            onChangeText={value => handleOnchange(value, 'username')}
          />
          <TextInputCustom
            styleContainer={{marginTop: 25}}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={value => handleOnchange(value, 'email')}
          />
          <TextInputCustom
            styleContainer={{marginTop: 25}}
            placeholder="Phone Number"
            keyboardType="email-address"
            // keyboardType="numeric"
            value={form.phone}
            onChangeText={value => handleOnchange(value, 'phone')}
          />
          <TextInputCustom
            styleContainer={{marginTop: 25}}
            placeholder="Password"
            value={form.password}
            onChangeText={value => handleOnchange(value, 'password')}
            label="Password"
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

          <Button
            disabled={loading}
            styleContainer={{marginTop: 36}}
            title={loading ? 'Please Wait' : 'Sign Up'}
            onPress={handleRegister}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 41,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            <TextBody title="Already have account?" />
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{marginLeft: 10}}>
              <TextBody style={{color: COLORS.primary.satu}} title="Log in" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
