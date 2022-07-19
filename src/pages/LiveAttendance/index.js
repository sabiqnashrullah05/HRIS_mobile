import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Header, TextBody, TextHeader, TextTitle} from '../../components';
import {COLORS, icons, images} from '../../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  attendanceIn,
  attendanceOut,
  createAttendance,
  getAttendance,
  resetAttendance,
  resetTimeAttendance,
} from '../../redux/action/attendanceAction';

const {Next, Prev, ClockDuration, ClockIn, clockOut, CalenderBlack} = icons;
const {ClockInButton, ClockOutButton} = images;

const LiveAttendance = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {data, timeIn, timeOut, isSucces, isComplete} = useSelector(
    state => state.attendance,
  );
  console.log('isComplete', isComplete);
  const {colors} = useTheme();

  React.useEffect(() => {
    const today = moment(new Date()).format('DD MMMM YYYY');
    const date = moment(timeOut).format('DD MMMM YYYY');
    if (isComplete === true && today !== date) {
      dispatch(resetTimeAttendance());
    }
  }, [isComplete]);

  const handlePressCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.1,
        cameraType: 'front',
        includeBase64: true,
      });
      console.log('result', result);
      if (result.didCancel !== true) {
        if (timeIn === null) {
          dispatch(attendanceIn(new Date()));
        } else {
          const data = {
            user_id: user.id,
            schedule_in: timeIn,
            schedule_out: new Date(),
          };

          dispatch(attendanceOut(new Date()));
          dispatch(createAttendance(data));
        }
      }
    } catch (error) {
      console.log('error getting image', error);
    }
  };

  const getDuration = () => {
    const JamMasuk = moment(timeIn).format('hh');
    const menitMasuk = moment(timeIn).format('mm');

    const JamKeluar = moment(timeOut).format('hh');
    const menitKeluar = moment(timeOut).format('mm');

    const sisaJam = +JamKeluar - +JamMasuk;
    const sisaMenit = +menitKeluar - +menitMasuk;

    return {sisaJam, sisaMenit};
  };

  React.useEffect(() => {
    if (isSucces) {
      dispatch(getAttendance());
      dispatch(resetAttendance());
    }
  }, [isSucces]);

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
            <TextTitle
              style={{marginLeft: 10}}
              title={moment(new Date()).format('dddd, DD MMMM YYYY')}
            />
          </View>
          <TouchableOpacity>
            <Next />
          </TouchableOpacity>
        </View>
        {/* Date Navigator Close */}

        <View style={{alignItems: 'center', marginTop: 57}}>
          <TextHeader
            style={{fontSize: 40, lineHeight: 48}}
            title={moment(new Date()).format('hh:mm')}
          />
          <TextBody style={{marginTop: -10}} title="Waktu Indonesia Barat" />
          <TouchableOpacity
            onPress={handlePressCamera}
            style={{marginTop: 47}}
            disabled={timeOut !== null}>
            {timeIn === null ? (
              <Image style={{width: 222, height: 222}} source={ClockInButton} />
            ) : (
              <Image
                style={{
                  width: 222,
                  height: 222,
                  opacity: timeOut !== null ? 0.3 : 1,
                }}
                source={ClockOutButton}
              />
            )}
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
              <TextTitle
                title={
                  timeIn !== null ? moment(timeIn).format('hh : mm') : '-- : --'
                }
              />
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
              <TextTitle
                title={
                  timeOut !== null
                    ? moment(timeOut).format('hh : mm')
                    : '-- : --'
                }
              />
              <TextBody style={{fontSize: 9}} title="Clock out time" />
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
              <TextTitle
                title={
                  timeOut !== null
                    ? `${getDuration().sisaJam} : ${getDuration().sisaMenit}`
                    : '-- : --'
                }
              />
              <TextBody style={{fontSize: 9}} title="Duration" />
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
