import React from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AuthPage} from '../pages';
import PublicRouter from './PublicRouter';

import Tabs from './tabs';
import {COLORS} from '../constant';

const Stack = createStackNavigator();
export const ThemeContext = React.createContext();

const colorScheme = Appearance.getColorScheme();
console.log('colorScheme', colorScheme);

const MyLightTheme = {
  dark: false,
  barContent: 'dark-content',
  colors: {
    primary: COLORS.primary.satu,
    secondary: COLORS.darkBlue,
    background: COLORS.white,
    background2: COLORS.white2,
    card: COLORS.white,
    textTitle: COLORS.black,
    textBody: COLORS.gray,
    border: COLORS.lightGray2,
  },
};
const MyDarkTheme = {
  dark: false,
  barContent: 'light-content',
  colors: {
    primary: '#4E1B1B',
    secondary: '#4E6676',
    background: '#191919',
    background2: '#191919',
    card: '#343434',
    textTitle: COLORS.white,
    textBody: COLORS.white,
    border: '#5C5C5C',
  },
};

const Router = () => {
  const [theme, setTheme] = React.useState('light');
  const themeData = {theme, setTheme};
  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer
        theme={theme === 'light' ? MyLightTheme : MyDarkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="AuthPage" component={AuthPage} />
          <Stack.Screen name="Auth" component={PublicRouter} />
          <Stack.Screen name="HomeScreen" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default Router;
