import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: {
    satu: '#780000',
    dua: '#13E181',
    tiga: '#F8D0D0',
    empat: '#99FFD0',
    lima: '#E4FFF3',
  },
  secondary: {
    satu: '#FAB244',
    dua: '#FECA54',
    tiga: '#FFDF6C',
    empat: '#FFEDAC',
    lima: '#FFF9E2',
  },

  white: '#fff',
  white2: '#F5F7F9',
  black: '#191919',
  blue: '#29BFFD',
  darkBlue: '#669BBC',
  red: '#e83444',
  orange: '#Efbd14',
  gray: '#777777',
  gray2: '#B8C1CC',
  lightGray: '#F5F6FB',
  lightGray2: '#E3E3E3',

  green: '#6DC992',
  lightGreen: 'rgba(35, 247, 0, 0.2)',
  yellow: '#FFD900',
  lightYellow: 'rgba(255, 217, 0, 0.2)',
  red: '#C1121F',
  lightRed: 'rgba(193, 18, 31, 0.2)',

  transparentBlack1: 'rgba(2, 2, 2, 0.1)',
  transparentBlack3: 'rgba(2, 2, 2, 0.3)',
  transparentBlack5: 'rgba(2, 2, 2, 0.5)',
  transparentBlack7: 'rgba(2, 2, 2, 0.7)',
  transparentBlack9: 'rgba(2, 2, 2, 0.9)',

  transparentGray: 'rgba(77,77,77, 0.8)',
  transparentDarkGray: 'rgba(20,20,20, 0.9)',

  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 20,

  // font sizes
  largeTitle: 40,
  h1: 26,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Nunito-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Nunito-Regular', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Nunito-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Nunito-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Nunito-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Nunito-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Nunito-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
