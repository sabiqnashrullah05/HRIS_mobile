import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextField, TextTitle} from '../../components';

const {Attachment, CalenderBlack, Time} = icons;

const TimeoffRequest = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Add Time Off" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextField
          label="Time Off Type"
          placeholder="Select time off type"
          styleContainer={{marginTop: 40}}
        />
        <TextField
          label="Start Date"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
        />
        <TextField
          label="End Date"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
        />
        <TextField
          label="Duration"
          placeholder="Cuti duration"
          styleContainer={{marginTop: 20}}
        />

        <TextField
          label="Reason"
          placeholder="Your reason"
          numberOfLines={3}
          styleContainer={{marginTop: 20}}
        />
        <TextField
          label="Nominal"
          placeholder="Rp"
          styleContainer={{marginTop: 20}}
        />
        <TextField
          editable={false}
          label="Attachment"
          placeholder="Choose File"
          styleContainer={{marginTop: 20}}
          iconRight={<Attachment />}
        />
        <TextField
          label="Delegated Task"
          placeholder="Cuti duration"
          styleContainer={{marginTop: 20}}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: COLORS.lightGray2,
            marginTop: 20,
          }}
        />
        <TextTitle style={{marginTop: 20}} title="Emergency Contact" />
        <TextField
          label="Name"
          placeholder="Emergency contact name"
          styleContainer={{marginTop: 20}}
        />
        <TextField
          label="Phone Number"
          placeholder="Emergency contact phone number"
          styleContainer={{marginTop: 20}}
        />
        <TextField
          label="Address"
          placeholder="Emergency contact address"
          numberOfLines={3}
          styleContainer={{marginTop: 20}}
        />

        <Button styleContainer={{marginTop: 60}} title="Submit" />
        <Button secondary styleContainer={{marginTop: 12}} title="Cancel" />
      </ScrollView>
    </View>
  );
};

export default TimeoffRequest;
