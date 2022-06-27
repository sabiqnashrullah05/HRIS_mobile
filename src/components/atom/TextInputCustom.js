import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, icons} from '../../constant';
import {TextBody} from './Text';

const {Eye, EyeClose} = icons;

const TextInputCustom = props => {
  const [focus, setFocus] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  return (
    <>
      <View
        style={{
          marginBottom: 10,
          borderWidth: 1,
          backgroundColor: COLORS.lightGray,
          borderColor: focus
            ? COLORS.primary.satu
            : props.error
            ? COLORS.red
            : COLORS.lightGray2,
          borderRadius: 12,
          ...props.styleContainer,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            placeholderTextColor={COLORS.gray}
            style={{
              color: COLORS.black,
              fontSize: 16,
              textAlignVertical: 'top',
              fontFamily: 'Nunito-Regular',
              flex: 1,
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            secureTextEntry={visible}
            {...props}
          />
          {props.label === 'Password' && (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              {visible ? (
                <Eye width={20} height={25} />
              ) : (
                <EyeClose width={20} height={25} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {props.error && (
        <Text
          style={{
            color: COLORS.red,
            fontSize: 14,
            marginLeft: 10,
            marginTop: -5,
            marginBottom: 15,
            fontFamily: 'Nunito-Regular',
          }}>
          *{props.errorText}
        </Text>
      )}
    </>
  );
};

export default TextInputCustom;
