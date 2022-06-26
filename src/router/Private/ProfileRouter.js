import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {
  Approval,
  ApprovalDetail,
  Contract,
  ContractDetail,
  EmployeInformation,
  Profile,
} from '../../pages';

const HomeStack = createStackNavigator();

const ProfileRouter = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen
        name="EmployeInformation"
        component={EmployeInformation}
      />
      <HomeStack.Screen name="Contract" component={Contract} />
      <HomeStack.Screen name="ContractDetail" component={ContractDetail} />
      <HomeStack.Screen name="Approval" component={Approval} />
      <HomeStack.Screen name="ApprovalDetail" component={ApprovalDetail} />
    </HomeStack.Navigator>
  );
};

export default ProfileRouter;
