import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors, FontSize} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  centerView: {
    width: wp('93'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: hp('3'),
    alignItems: 'center',
    marginTop: hp('5'),
  },
  btn: {
    width: wp('85'),
    marginTop: hp('5'),
    marginBottom: hp('5'),
    alignSelf: 'center',
  },
});
