import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS, icons} from '../../constant';
import Header from '../../components/atom/Header';
import {TextBody, TextTitle} from '../../components/atom/Text';
import {useTheme} from '@react-navigation/native';

const {Sort, Download} = icons;

const File = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title="File" />
      <View style={{paddingHorizontal: 24}}>
        {/* Header Content Start */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TextTitle title="Company File" />
            <TextBody title="2 Files" />
          </View>
          <TouchableOpacity>
            <Sort />
          </TouchableOpacity>
        </View>
        {/* Header Content Close */}
        {/* Card Start */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            marginTop: 21,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TextBody title="03/03/2022" />
            <TextTitle title="Ketentuan Reimbursment" />
            <TextTitle
              style={{color: COLORS.gray}}
              title="Lusiana susilowati"
            />
          </View>
          <View>
            <Download />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TextBody title="23/03/2022" />
            <TextTitle title="Form Pengajuan Cash Advance" />
            <TextTitle
              style={{color: COLORS.gray}}
              title="Lusiana susilowati"
            />
          </View>
          <View>
            <Download />
          </View>
        </TouchableOpacity>
        {/* Card Close */}
      </View>
    </View>
  );
};

export default File;
