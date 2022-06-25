import {View, Text} from 'react-native';
import React from 'react';
import {TextBody} from '../../atom/Text';
import {images, COLORS} from '../../../constant';

const {UserProfile} = images;

const AnnouncementCard = ({styleContainer}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginHorizontal: 24,
        shadowColor: 'rgba(0, 0, 0, 0.09)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4.65,

        elevation: 4,
        padding: 20,
        borderRadius: 12,
        marginVertical: 9,
        ...styleContainer,
      }}>
      {/* Header Content */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <UserProfile width={30} height={30} />
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 1, marginLeft: 10}}>
            <TextBody style={{color: COLORS.black}} title="Marry Anne" />
            <TextBody style={{lineHeight: 14}} title="CEO" />
          </View>
          <TextBody style={{fontSize: 11}} title="21/02/2022 03.53 pm" />
        </View>
      </View>
      <TextBody
        style={{marginTop: 23}}
        title="Perubahan Kebijakan Jadwal Kerja"
      />
      <TextBody
        style={{marginTop: 11}}
        title="Diberitahukan kepada seluruh karyawan bahwasannya terdapat perubahan dalam kebijakan jadwal kerja dikarenakan kondisi saat ini dimana  kasus virus corona  di Jawa barat kembali naik. "
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: COLORS.lightGray2,
          borderRadius: 8,
        }}>
        <View
          style={{
            width: 27,
            height: 29,
            backgroundColor: COLORS.darkBlue,
            borderRadius: 5,
          }}></View>
        <TextBody
          style={{marginLeft: 10}}
          title="Jadwal Kerja IT Support.docx"
        />
      </View>
    </View>
  );
};

export default AnnouncementCard;
