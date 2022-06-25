import {View, StatusBar} from 'react-native';
import React from 'react';
import {images, COLORS} from '@/constant';
import {TextBody} from '@/components';
const {Logo} = images;

const SplashScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Logo />
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 100}}>
        <TextBody title="Powered by" />
        <TextBody style={{marginLeft: 5, color: COLORS.blue}} title="POWER" />
        <TextBody style={{color: COLORS.black}} title="KERTO" />
      </View>
    </View>
  );
};

export default SplashScreen;
