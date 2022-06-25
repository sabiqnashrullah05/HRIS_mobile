import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Announcement, Dashboard, LiveAttendance} from '../pages';

const HomeStack = createStackNavigator();

const PrivateRouter = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
      <HomeStack.Screen name="Announcement" component={Announcement} />
      <HomeStack.Screen name="LiveAttendance" component={LiveAttendance} />
    </HomeStack.Navigator>
  );
};

export default PrivateRouter;
