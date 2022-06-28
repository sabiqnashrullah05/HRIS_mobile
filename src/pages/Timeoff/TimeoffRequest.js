import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextBody, TextField, TextTitle} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '@react-navigation/native';

const {Attachment, CalenderBlack, Time} = icons;

const TimeoffRequest = () => {
  const {colors} = useTheme();

  const [checkBox, setCheckBox] = React.useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
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
        <View
          style={{flexDirection: 'row', marginTop: 41, alignItems: 'center'}}>
          <CheckBox
            tintColors={{true: COLORS.primary.satu}}
            value={checkBox}
            onValueChange={newValue => setCheckBox(newValue)}
          />
          <TextTitle style={{fontSize: 12}} title="Delegated To" />
        </View>
        <TextField label="" placeholder="" />
        <TextField
          label="Delegated Task"
          placeholder="Cuti duration"
          styleContainer={{marginTop: 20}}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: colors.border,
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
