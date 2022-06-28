import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from '../../constant';
import PermissionIzin from './PermissionIzin';

import PermissionLate from './PermissionLate';
import PermissionSick from './PermissionSick';

export default function TabPermission({index, setIndex}) {
  const {colors} = useTheme();

  const renderScene = SceneMap({
    first: PermissionLate,
    second: PermissionIzin,
    third: PermissionSick,
  });
  const layout = useWindowDimensions();

  const [routes] = React.useState([
    {key: 'first', title: 'Late Arrival Permit'},
    {key: 'second', title: 'Izin Keluar Kantor'},
    {key: 'third', title: 'Sick Leave'},
  ]);

  const _renderTabBar = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: colors.border,

            // paddingTop: Constants.statusBarHeight,
          }}>
          {/* <ScrollView style={{paddingVertical: 10}}> */}
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity
                key={`${route}-${i}`}
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  padding: 10,
                  marginHorizontal: 5,
                  //   backgroundColor:
                  //     index === i ? Warna.primary.satu : Warna.primary.lima,
                  //   borderRadius: 10,
                  borderBottomWidth: index === i ? 2 : 0,
                  borderBottomColor: index === i ? COLORS.primary.satu : null,
                  // height: 50,
                }}
                onPress={() => setIndex(i)}>
                <View style={{flexDirection: 'row'}}>
                  <Animated.Text
                    style={{
                      color: index === i ? COLORS.primary.satu : COLORS.gray,
                      fontFamily: 'Nunito-Regular',
                    }}>
                    {route.title}
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            );
          })}
          {/* </ScrollView> */}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <TabView
        renderTabBar={_renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}
