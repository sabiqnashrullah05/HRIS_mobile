import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {WelcomePage, IntroPage, Login} from '@/pages';
import {ForgotPassword, SignUp} from '../pages';

const AuthStack = createStackNavigator();

const PublicRouter = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name="Welcome" component={WelcomePage} />
      <AuthStack.Screen name="Intro" component={IntroPage} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default PublicRouter;
