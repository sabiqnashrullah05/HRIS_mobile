import {View, TouchableOpacity, Switch, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {COLORS, images, icons} from '../../constant';
import {TextBody, TextHeader, TextTitle} from '../../components';
import {ThemeContext} from '../../router/Router';

const {UserProfile} = images;
const {Employe, Contract, Approval, ArrowRightGray, LogOut, DarkMode} = icons;

const Profile = ({navigation}) => {
  const {colors} = useTheme();
  const themes = useTheme();
  const {setTheme, theme} = React.useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const ListItemProfile = ({title, icon, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray2,
          paddingVertical: 18,
        }}>
        {icon}

        <View style={{flex: 1, alignItems: 'flex-start', marginLeft: 20}}>
          <TextTitle title={title} />
        </View>
        <ArrowRightGray />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background2,
        paddingHorizontal: 24,
      }}>
      <StatusBar
        barStyle={themes.barContent}
        backgroundColor={colors.background}
      />
      <View style={{alignItems: 'center', marginTop: 45}}>
        <UserProfile />
        <TextHeader style={{marginTop: 17}} title="Kylie Jenner" />
        <TextBody title="IT Development" />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.card,
          paddingHorizontal: 10,
          paddingVertical: 22,
          borderRadius: 15,
          marginTop: 25,
        }}>
        <ListItemProfile
          onPress={() => navigation.navigate('EmployeInformation')}
          title="Employee Information"
          icon={<Employe />}
        />
        <ListItemProfile
          onPress={() => navigation.navigate('Contract')}
          title="My Contract"
          icon={<Contract />}
        />
        <ListItemProfile
          onPress={() => navigation.navigate('Approval')}
          title="Approval"
          icon={<Approval />}
        />
        <View
          // onPress={onPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray2,
            paddingVertical: 18,
          }}>
          <DarkMode />

          <View style={{flex: 1, alignItems: 'flex-start', marginLeft: 20}}>
            <TextTitle title="Dark Mode" />
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#767577'}}
            thumbColor={isEnabled ? COLORS.primary.satu : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      {/* Button Sign Out */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: COLORS.primary.tiga,
          paddingVertical: 17,
          alignItems: 'center',
          borderRadius: 15,
          marginBottom: 30,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <LogOut />
        <TextBody
          style={{color: COLORS.primary.satu, marginLeft: 20}}
          title="SIGN OUT"
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        // onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          backgroundColor: COLORS.primary.tiga,
          paddingVertical: 17,
          alignItems: 'center',
          borderRadius: 15,
          marginBottom: 30,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextBody
          style={{color: COLORS.primary.satu, marginLeft: 20}}
          title="Change Theme"
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;
