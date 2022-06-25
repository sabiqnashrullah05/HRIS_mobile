/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SplashScreen} from './src/pages';

const MainScreen = () => {
  const [currentScreen, setCurrentScreen] = React.useState('Splash');
  React.useEffect(() => {
    setTimeout(() => {
      setCurrentScreen('App');
    }, 5000);
  }, []);
  let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <App />;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {mainScreen}
      </PersistGate>
    </Provider>
  );
};

export default MainScreen;

AppRegistry.registerComponent(appName, () => MainScreen);
