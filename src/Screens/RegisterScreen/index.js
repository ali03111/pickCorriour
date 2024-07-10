import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  lock,
  userIcon,
  phone,
  logo,
  rememberImg,
  rememberEmpty,
  username,
  emailIcon,
  passwordIcon,
  company,
  google,
  facebook,
  apple,
  locksetting,
  sms,
  user,
  demoProfile,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import {LoginBg} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import SocialBottomComp from '../../Components/SocialBottomComp';
import ImageBgComp from '../../Components/ImageBgComp';
import {CircleImage} from '../../Components/CircleImage';

const RegisterScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    loginNav,
    signUpButton,
    PolicyValue,
    policy,
    onSelectImage,
    profileData,
  } = useRegister(navigation);
  return (
    <ImageBgComp
      childern={
        <KeyBoardWrapper
          styles={styles.logInMain}
          showsVerticalScrollIndicator={false}>
          <View style={styles.loginBottom}>
            <View style={styles.loginTop}>
              <TextComponent text={'Sign Up'} styles={styles.signInText} />
              <CircleImage
                image={
                  Boolean(profileData?.path) ? profileData?.path : demoProfile
                }
                styles={styles.profileView}
                uri={Boolean(profileData?.path) ? true : false}
              />

              <TouchableOpacity onPress={onSelectImage}>
                <TextComponent
                  text={'Upload Photo'}
                  styles={styles.uploadBtn}
                />
              </TouchableOpacity>
            </View>
            <InputComponent
              {...{
                name: 'name',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'First Name',
                isImage: user,
                defaultValue: '',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
              }}
            />
            <InputComponent
              {...{
                name: 'last_name',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Last Name',
                defaultValue: '',
                isImage: user,
              }}
            />

            <InputComponent
              {...{
                name: 'email',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Email Address',
                isImage: sms,
                defaultValue: '',
              }}
            />
            <InputComponent
              {...{
                name: 'password',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Password',
                isImage: locksetting,
                defaultValue: '',
                isSecure: true,
                inputIconStyle: styles.lockstyle,
              }}
            />
            <InputComponent
              {...{
                name: 'confirm_password',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Confirm Password',
                isImage: locksetting,
                defaultValue: '',
                isSecure: true,
                inputIconStyle: styles.lockstyle,
              }}
            />
            <View style={{paddingTop: hp('3')}}>
              <ThemeButton
                title={'Register'}
                // onPress={handleSubmit(signUpButton)}
                onPress={() => navigation.navigate('DrawerNavigation')}
                style={styles.buttonStyle}
              />
            </View>
            <View style={styles.dontHave}>
              <TextComponent
                text={'Already have an account?'}
                styles={styles.dontHaveText}
              />
              <Touchable onPress={loginNav}>
                <Text style={styles.signUpText}>Log In</Text>
              </Touchable>
            </View>
          </View>
        </KeyBoardWrapper>
      }
    />
  );
};
export default memo(RegisterScreen);
