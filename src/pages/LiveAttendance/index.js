import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Header, TextBody, TextHeader, TextTitle} from '../../components';
import {COLORS, icons, images} from '../../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

const {Next, Prev, ClockDuration, ClockIn, clockOut, CalenderBlack} = icons;
const {ClockInButton} = images;

const LiveAttendance = ({navigation}) => {
  const {colors} = useTheme();

  const handlePressCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.1,
        cameraType: 'front',
        includeBase64: true,
      });
      console.log('result', result);
    } catch (error) {
      console.log('error getting image', error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Header title="Live Attendance" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Date Navigator Start */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 12,
            backgroundColor: colors.card,
            marginHorizontal: 24,
            marginTop: 20,
            borderRadius: 12,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Prev />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CalenderBlack />
            <TextTitle style={{marginLeft: 10}} title="Monday, 9 May 2022" />
          </View>
          <TouchableOpacity>
            <Next />
          </TouchableOpacity>
        </View>
        {/* Date Navigator Close */}

        <View style={{alignItems: 'center', marginTop: 57}}>
          <TextHeader style={{fontSize: 40, lineHeight: 48}} title="08:00" />
          <TextBody style={{marginTop: -10}} title="Waktu Indonesia Barat" />
          <TouchableOpacity onPress={handlePressCamera} style={{marginTop: 47}}>
            <Image style={{width: 222, height: 222}} source={ClockInButton} />
          </TouchableOpacity>
        </View>

        {/* Date Information Start */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              borderRightWidth: 1,
              borderRightColor: colors.border,
              marginRight: 10,
            }}>
            <View style={{marginRight: 10}}>
              <ClockIn />
            </View>
            <View>
              <TextTitle title="-- : --" />
              <TextBody style={{fontSize: 9}} title="Clock in time" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <View style={{marginRight: 10}}>
              <ClockIn />
            </View>
            <View>
              <TextTitle title="-- : --" />
              <TextBody style={{fontSize: 9}} title="Clock in time" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              borderLeftWidth: 1,
              borderLeftColor: colors.border,
              paddingLeft: 10,
            }}>
            <View style={{marginRight: 10}}>
              <ClockIn />
            </View>
            <View>
              <TextTitle title="-- : --" />
              <TextBody style={{fontSize: 9}} title="Clock in time" />
            </View>
          </View>
        </View>
        {/* Date Information Close */}

        {/* Location Start */}
        <View
          style={{
            marginTop: 57,
            padding: 20,
            backgroundColor: colors.card,
            marginHorizontal: 24,
            borderRadius: 5,
          }}>
          <TextTitle title="Location" />
          <TextBody title="Gg. Satria II, Sokayasa, RT04/RW01, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53146. H7C5+RX" />
        </View>
        {/* Location Close */}
      </ScrollView>
    </View>
  );
};

export default LiveAttendance;
