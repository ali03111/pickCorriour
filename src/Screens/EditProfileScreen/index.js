import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import ImageBgComp from '../../Components/ImageBgComp';
import {styles} from './styles';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {CircleImage} from '../../Components/CircleImage';
import {Colors, FontSize} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginScreen, RegisterScreen} from '..';
import {capitalizeFirstLetter} from '../../Utils/globalFunctions';
import {InputComponent} from '../../Components/InputComponent';
import {lock} from '../../Assets';
import ThemeButton from '../../Components/ThemeButton';
import useEditProfileScreen from './useEditProfileScreen';

const EditProfileScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues} =
    useEditProfileScreen(navigation);
  const InputViewWithHeading = ({title, inputVal, viewStyle}) => {
    return (
      <View style={viewStyle}>
        <TextComponent text={title} fade={true} styles={{color: 'gray'}} />
        <InputComponent
          {...{
            name: inputVal,
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: title,
            isImage: lock,
            defaultValue: '',
            // isSecure: true,
            inputIconStyle: styles.lockstyle,
            tintColor: Colors.themeRed,
            viewStyle: {width: wp('85'), marginTop: hp('1')},
            errorTextStyle: {color: 'black', width: wp('80')},
          }}
        />
      </View>
    );
  };
  return (
    <ImageBgComp
      childern={
        <>
          <ScrollView contentContainerStyle={{marginBottom: hp('10')}}>
            <View style={styles.profileBackGround}>
              <View style={styles.centerView}>
                <InputViewWithHeading title={'Driver Name'} inputVal={'name'} />
                <InputViewWithHeading
                  title={'Phone Number'}
                  inputVal={'phone'}
                  // viewStyle={{marginTop: hp('5')}}
                />
                <InputViewWithHeading
                  title={'License Number'}
                  inputVal={'lincense_number'}
                  // viewStyle={{marginTop: hp('2')}}
                />
              </View>
              <ThemeButton
                title={'Update Profile'}
                // onPress={handleSubmit(changePassword)}
                style={styles.btn}
              />
            </View>
          </ScrollView>
        </>
      }
    />
  );
};
export default memo(EditProfileScreen);
