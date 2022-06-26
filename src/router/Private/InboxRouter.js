import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Inbox, InboxDetail} from '../../pages';

const HomeStack = createStackNavigator();

const InboxRouter = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Inbox" component={Inbox} />
      <HomeStack.Screen name="InboxDetail" component={InboxDetail} />
    </HomeStack.Navigator>
  );
};

export default InboxRouter;
