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
import {COLORS, FONTS, icons} from '@/constant';
import intro from '@/utils/dataJSON/intro';
import {TextBody, TextTitle} from '../../../components';

const {width, height} = Dimensions.get('screen');
const {Right, Left} = icons;

const Indicator = ({scrollX}) => {
  console.log('scrollX', scrollX);
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 100, marginHorizontal: 20}}>
      <TouchableOpacity>
        <Left />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {intro.map((_, i) => {
          console.log('index', i);
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: COLORS.primary.satu,
                margin: 5,
                transform: [{scale}],
                opacity,
              }}
            />
          );
        })}
      </View>
      <TouchableOpacity>
        <Right />
      </TouchableOpacity>
    </View>
  );
};

const IntroPage = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{flex: 1, alignItems: 'center', backgroundColor: COLORS.white}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle="dark-content"
      />

      <Animated.FlatList
        data={intro}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center', padding: 20}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  source={item.image}
                  style={{
                    width: width - 60,
                    height: width - 60,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 0.3}}>
                <TextTitle title={item.title} />
                <TextBody style={{marginTop: 20}} title={item.text} />
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default IntroPage;
