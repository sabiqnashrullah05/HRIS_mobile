import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images} from '@/constant';

import AppIntroSlider from 'react-native-app-intro-slider';
import {TextBody, TextHeader, TextTitle} from '../../../components';

const {width, height} = Dimensions.get('screen');
const {Right, Left} = icons;

const IntroPage = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: 'Easy Attendance and Recorded by the System',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tellus tristique viverra cras amet at fringilla. Facilisi magna ultrices sed amet egestas augue rutrum.',
      image: images.introSatu,
    },
    {
      key: 2,
      title: 'Do it easily anywhere',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tellus tristique viverra cras amet at fringilla. Facilisi magna ultrices sed amet egestas augue rutrum.',
      image: images.introDua,
    },
    {
      key: 3,
      title: 'Easy Attendance and Recorded by the System',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tellus tristique viverra cras amet at fringilla. Facilisi magna ultrices sed amet egestas augue rutrum.',
      image: images.introTiga,
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          //   alignItems: 'center',
          marginHorizontal: 24,
        }}>
        <Image
          source={item.image}
          style={{
            width: width - 60,
            height: width - 60,
            resizeMode: 'contain',
          }}
        />
        <TextHeader style={{marginTop: 50}} title={item.title} />
        <TextBody style={{marginTop: 20}} title={item.text} />
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate('Login');
  };

  const _renderNextButton = () => {
    return <Right />;
  };

  const _renderLeftButton = () => {
    return <Left />;
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderNextButton}
      renderPrevButton={_renderLeftButton}
      showPrevButton
      showDoneButton
      dotStyle={{backgroundColor: COLORS.primary.tiga}}
      activeDotStyle={{backgroundColor: COLORS.primary.satu}}
    />
  );
};

export default IntroPage;
