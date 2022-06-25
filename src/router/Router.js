import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AuthPage} from '../pages';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="AuthPage" component={AuthPage} />
        <Stack.Screen name="Auth" component={PublicRouter} />
        <Stack.Screen name="Home" component={PrivateRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
