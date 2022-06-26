import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS, icons} from '../constant';

const {Home, HomeActive, Inbox, InboxActive, Profile, ProfileActive} = icons;

import {TabIcon} from '../components';
import DashboardRouter from './Private/DashboardRouter';
import InboxRouter from './Private/InboxRouter';
import ProfileRouter from './Private/ProfileRouter';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarShowLabel: false,

        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          // height: 100,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={DashboardRouter}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={focused ? <HomeActive /> : <Home />}
              title="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="InboxTab"
        component={InboxRouter}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={focused ? <InboxActive /> : <Inbox />}
              title="Inbox"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileRouter}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={focused ? <ProfileActive /> : <Profile />}
              title="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
