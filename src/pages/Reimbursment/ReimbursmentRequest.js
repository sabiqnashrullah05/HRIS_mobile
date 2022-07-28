import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextField} from '../../components';
import {useTheme} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  createReimbursment,
  getReimbursment,
  resetReimbursment,
} from '../../redux/action/reimbursmentAction';

const {CalenderBlack} = icons;

const ReimbursmentRequest = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {isSucces, isError} = useSelector(state => state.reimbursment);

  const {colors} = useTheme();
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [dateSelected, setDateSelected] = React.useState('');
  const [form, setForm] = React.useState({
    reason: '',
    nominal: 0,
  });

  const handleOnchange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    const data = {
      ...form,
      user_id: user?.id,
      name: user?.name,
      request_date: dateSelected,
    };

    dispatch(createReimbursment(data));
  };

  React.useEffect(() => {
    const data = {
      id: user?.id,
    };
    if (isSucces) {
      setLoading(false);
      dispatch(getReimbursment(data));
      dispatch(resetReimbursment());
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }

    if (isError) {
      setLoading(false);
    }
  }, [isError, isSucces]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="Request Reimbursment" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextField
          label="Date"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
          onPressIconRight={() => setOpen(true)}
          value={dateSelected}
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDateSelected(moment(date).format('DD MMMM YYYY'));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <TextField
          label="Reason"
          placeholder="Your reason"
          numberOfLines={3}
          styleContainer={{marginTop: 20}}
          value={form.reason}
          onChangeText={value => handleOnchange(value, 'reason')}
        />
        <TextField
          label="Nominal"
          placeholder="Rp"
          styleContainer={{marginTop: 20}}
          value={form.nominal}
          onChangeText={value => handleOnchange(value, 'nominal')}
        />
        {/* <TextField
          editable={false}
          label="Attachment"
          placeholder="Choose File"
          styleContainer={{marginTop: 20}}
          iconRight={<Attachment />}
        /> */}

        <Button
          disabled={loading}
          styleContainer={{marginTop: 60}}
          title={loading ? 'Please Wait' : 'Submit'}
          onPress={handleSubmit}
        />
        <Button secondary styleContainer={{marginTop: 12}} title="Cancel" />
      </ScrollView>
    </View>
  );
};

export default ReimbursmentRequest;
