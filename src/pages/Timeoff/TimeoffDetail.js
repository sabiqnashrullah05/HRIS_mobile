import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';

const {Resi} = images;

const TimeoffDetail = () => {
  const List = ({keyTitle, valuetitle}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray2,
          paddingHorizontal: 10,
          paddingVertical: 12,
        }}>
        <TextBody style={{color: COLORS.black}} title={keyTitle} />
        <TextBody title={valuetitle} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <Header title="Detail Timeoff" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}>
        {/* Detail Start */}
        <TextBody style={{marginTop: 20, marginBottom: 10}} title="Detail" />
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Start Date" valuetitle="17/02/2022" />
          <List keyTitle="End Date" valuetitle="17/05/2022" />
          <List keyTitle="Type" valuetitle="Cuti Keluarga menikah" />
          <List
            keyTitle="Notes"
            valuetitle="Akad, Resepsi serta kunjungan balik"
          />
        </View>
        {/* Detail Close */}
        {/* Time Start */}
        <TextBody style={{marginTop: 20, marginBottom: 10}} title="Time" />
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Available" valuetitle="10 Days" />
          <List keyTitle="Duration" valuetitle="5 Days" />
          <List keyTitle="Sisa cuti" valuetitle="5 Days" />
        </View>
        {/* Time Close */}
        {/* Delegation Start */}
        <TextBody
          style={{marginTop: 20, marginBottom: 10}}
          title="Delegation"
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Delegated to" valuetitle="Other Employee Name" />
          <List keyTitle="Task" valuetitle="Delegated Task to other employee" />
        </View>
        {/* Delegation Close */}
        {/* Emergency Contact Start */}
        <TextBody
          style={{marginTop: 20, marginBottom: 10}}
          title="Emergency Contact"
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
          }}>
          <List keyTitle="Name" valuetitle="Farhan" />
          <List keyTitle="Phone Number" valuetitle="08234567890" />
          <List
            keyTitle="Address"
            valuetitle="Jakarta, Jawa Barat, Indonesia"
          />
        </View>
        {/* Emergency Contact Close */}
        {/* Status Approval Start */}
        <TextBody
          style={{marginTop: 20, marginBottom: 10}}
          title="Status Approval"
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            paddingBottom: 30,
            borderRadius: 12,
            marginBottom: 20,
          }}>
          <List keyTitle="Leader" valuetitle="" />
          <List keyTitle="HRD" valuetitle="" />
        </View>
        {/* Status Approval Close */}
      </ScrollView>
    </View>
  );
};

export default TimeoffDetail;
