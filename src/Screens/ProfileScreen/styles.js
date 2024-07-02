import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors, FontSize} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  profileBackGround: {
    backgroundColor: Colors.headerBg,
    padding: 25,
  },
  imageView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    aspectRatio: 1,
    height: hp('10'),
  },
  textTransist: {
    color: Colors.textGreen,
    marginLeft: wp('2'),
    marginBottom: hp('1'),
  },
  truckNo: {
    color: Colors.white,
    marginLeft: wp('2'),
    fontSize: FontSize.scale18,
    fontWeight: 'bold',
  },
});
