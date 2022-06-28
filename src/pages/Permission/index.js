import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Header, Tags, TextBody, TextTitle} from '../../components';
import TabPermission from './TabPermission';
import {useTheme} from '@react-navigation/native';

const {Plus} = icons;

const Permission = ({navigation}) => {
  const {colors} = useTheme();

  const [index, setIndex] = React.useState(0);

  const handlePressPermission = () => {
    switch (index) {
      case 0:
        console.log('index satu', index);
        navigation.navigate('LateArrivalPermit');
        break;
      case 1:
        console.log('index dua', index);
        navigation.navigate('IzinKeluarKantor');
        break;
      case 2:
        console.log('index tiga', index);
        navigation.navigate('SickLeave');
        break;

      default:
        break;
    }
  };

  console.log('index ====>>>  ', index);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Permission" />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 24,
          }}>
          <View>
            <TextTitle title="Activity Log" />
            <TextBody title="4 Data" />
          </View>

          <TouchableOpacity
            onPress={handlePressPermission}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Plus />
            <TextBody
              style={{marginLeft: 10, color: COLORS.primary.satu}}
              title="Permission"
            />
          </TouchableOpacity>
        </View>
        <TabPermission index={index} setIndex={setIndex} />
      </View>
    </View>
  );
};

export default Permission;
