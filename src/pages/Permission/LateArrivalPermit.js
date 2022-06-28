import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextField} from '../../components';
import {useTheme} from '@react-navigation/native';

const {Attachment, CalenderBlack, Time} = icons;

const LateArrivalPermit = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Late Arrival Permit" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextField
          label="Division"
          placeholder="Select time off type"
          styleContainer={{marginTop: 40}}
        />
        <TextField
          label="Job Position"
          placeholder="Select time off type"
          styleContainer={{marginTop: 20}}
        />
        <TextField
          label="Date"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
        />
        <TextField
          label="Time to go to office"
          placeholder="Select time"
          styleContainer={{marginTop: 20}}
          editable={false}
          iconRight={<Time />}
        />

        <TextField
          label="Reason"
          placeholder="Your reason"
          numberOfLines={3}
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

export default LateArrivalPermit;
