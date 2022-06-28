import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, icons} from '../../constant';
import {TextBody, TextTitle} from './Text';

const {Eye, EyeClose} = icons;

const TextField = props => {
  const [focus, setFocus] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const {colors} = useTheme();

  return (
    <>
      <TextTitle
        style={{marginBottom: 10, ...props.styleContainer}}
        title={props.label}
      />
      <View
        style={{
          marginBottom: 10,
          borderWidth: 1,
          backgroundColor:
            props.label === 'Attachment' ? colors.border : colors.card,
          borderColor: focus
            ? COLORS.primary.satu
            : props.error
            ? COLORS.red
            : colors.border,
          borderRadius: 6,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            numberOfLines={props.numberOfLines}
            // maxLength={props.maxLength}
            multiline={props.numberOfLines ? true : false}
            placeholderTextColor={COLORS.gray2}
            style={{
              color: COLORS.black,
              fontSize: 16,
              textAlignVertical: 'top',
              fontFamily: 'Nunito-Regular',
              flex: 1,
            }}
            editable={props.editable}
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
          {props.iconRight && (
            <TouchableOpacity onPress={props.onPressIconRight}>
              {props.iconRight}
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

export default TextField;
