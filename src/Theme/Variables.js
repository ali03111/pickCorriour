import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Colors = {
  primaryColor: '#FFAF00',
  black: '#000000',
  white: '#ffffff',
  themeOrg: '#FF7300',
  gray: 'rgba(45, 45, 45, 0.5)',
  grayBorder: '#D9D9D9',
  lightGray: 'rgba(0, 0, 0, 0.50)',
  textGray: 'rgba(32, 32, 32, 0.50)',
  headerBg: '#343A3D',
  textGreen: '#53C75E',
  textGrayColor: '#6B6B6B',
};

/** FontSize **/
const FontSize = {
  scale12: Math.round(width / 36),
  scale13: Math.round(width / 33),
  scale14: Math.round(width / 31.5),
  scale15: Math.round(width / 29),
  scale16: Math.round(width / 27),
  scale18: Math.round(width / 24),
  scale19: Math.round(width / 22),
  scale20: Math.round(width / 21.5),
  scale21: Math.round(width / 20),
  scale22: Math.round(width / 19.5),
  scale24: Math.round(width / 18),
  scale26: Math.round(width / 16.5),
  scale28: Math.round(width / 15.5),
  scale30: Math.round(width / 14.5),
  scale31: Math.round(width / 14),
  scale32: Math.round(width / 13.5),
  scale33: Math.round(width / 13),
  scale34: Math.round(width / 12.5),
  scale35: Math.round(width / 12),
  scale36: Math.round(width / 11.5),
  scale37: Math.round(width / 11),
  scale38: Math.round(width / 10.5),
  scale39: Math.round(width / 10),
  scale40: Math.round(width / 9.5),
  scale41: Math.round(width / 9),
  scale42: Math.round(width / 8.5),
  scale43: Math.round(width / 8),
  scale44: Math.round(width / 7.5),
  scale45: Math.round(width / 7),
  scale46: Math.round(width / 6.5),
  scale47: Math.round(width / 6),
  scale48: Math.round(width / 5.5),
  scale49: Math.round(width / 5),
  scale50: Math.round(width / 4.5),
};

const Sizes = {
  width,
  height,
  h10: Math.round(height * 0.0125),
  h20: Math.round(height * 0.025),
};

export {Colors, FontSize, Sizes};
