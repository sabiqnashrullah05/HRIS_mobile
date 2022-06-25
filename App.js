import {View, Text} from 'react-native';
import React from 'react';
import Router from '@/router/Router';
import 'react-native-gesture-handler';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
  checkMultiple,
} from 'react-native-permissions';

const App = () => {
  React.useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.CAMERA,
    ]).then(result => {
      console.log(`result`, result);
    });
    checkMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.CAMERA,
    ])
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');

            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(`error cek permission`, error);
      });
  }, []);
  return (
    <>
      <Router />
    </>
  );
};

export default App;
