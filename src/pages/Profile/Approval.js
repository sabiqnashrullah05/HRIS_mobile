import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {ApprovalCard, Header, TextBody, TextTitle} from '../../components';

const Approval = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="My Approval" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <ApprovalCard
          onPress={() => navigation.navigate('ApprovalDetail')}
          title="Overtime"
          date="21/05/2022"
          description="Mengerjakan Front end website"
          type="Approved"
          styleContainer={{marginTop: 39}}
        />
        <ApprovalCard
          onPress={() => navigation.navigate('ApprovalDetail')}
          title="Time Off"
          date="21/05/2022"
          description="Mengerjakan Front end website"
          type="Rejected"
          styleContainer={{marginTop: 15}}
        />
        <ApprovalCard
          onPress={() => navigation.navigate('ApprovalDetail')}
          title="Contract"
          date="21/05/2022"
          description="Perpanjang contract"
          type="Pending"
          styleContainer={{marginTop: 15}}
        />
      </ScrollView>
    </View>
  );
};

export default Approval;
