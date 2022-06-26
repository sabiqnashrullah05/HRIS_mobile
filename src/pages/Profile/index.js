import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, images, icons} from '../../constant';
import {TextBody, TextHeader, TextTitle} from '../../components';

const {UserProfile} = images;
const {Employe, Contract, Approval, ArrowRightGray, LogOut} = icons;

const Profile = ({navigation}) => {
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
      style={{flex: 1, backgroundColor: COLORS.white2, paddingHorizontal: 24}}>
      <View style={{alignItems: 'center', marginTop: 45}}>
        <UserProfile />
        <TextHeader style={{marginTop: 17}} title="Kylie Jenner" />
        <TextBody title="IT Development" />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
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
    </View>
  );
};

export default Profile;
