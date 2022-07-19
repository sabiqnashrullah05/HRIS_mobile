import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
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
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, resetLogin} from '../../../redux/action/authAction';

const {Google, Apple} = images;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {isAuthenticated, isError} = useSelector(state => state.auth);

  const {colors} = useTheme();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const handleOnchange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleLogin = () => {
    setLoading(true);
    dispatch(loginUser(form));
  };

  React.useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
    if (isAuthenticated) {
      setLoading(false);
      navigation.replace('HomeScreen');
    }
    if (isError) {
      setLoading(false);
      dispatch(resetLogin());
    }
  }, [isAuthenticated, isError]);

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
          placeholder="Enter Username"
          keyboardType="email-address"
          value={form.username}
          onChangeText={value => handleOnchange(value, 'username')}
        />
        <TextInputCustom
          styleContainer={{marginTop: 25}}
          placeholder="Password"
          label={'Password'}
          value={form.password}
          onChangeText={value => handleOnchange(value, 'password')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{alignSelf: 'flex-end'}}>
          <TextBody title="Forgot password" />
        </TouchableOpacity>
        <Button
          disabled={loading}
          styleContainer={{marginTop: 36}}
          title={loading ? 'Please Wait' : 'Login'}
          onPress={handleLogin}
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
