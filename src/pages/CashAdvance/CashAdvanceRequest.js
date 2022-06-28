import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextField} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Attachment, CalenderBlack} = icons;

const CashAdvanceRequest = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Request Cash Advance" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextField
          label="Date of Use"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
        />
        <TextField
          label="Policy Name"
          placeholder="Select policy name"
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

        <Button styleContainer={{marginTop: 60}} title="Submit" />
        <Button secondary styleContainer={{marginTop: 12}} title="Cancel" />
      </ScrollView>
    </View>
  );
};

export default CashAdvanceRequest;
