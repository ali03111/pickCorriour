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
import {EditProfileScreen, LoginScreen, RegisterScreen, TripHistory} from '..';
import {capitalizeFirstLetter} from '../../Utils/globalFunctions';

const Tab = createMaterialTopTabNavigator();
const ProfileScreen = ({navigation}) => {
  return (
    <ImageBgComp
      childern={
        <>
          <HeaderComponent
            goBack={() => navigation.goBack()}
            isBack
            headerTitle={'Peater Williamson'}
          />
          <View style={styles.profileBackGround}>
            <View style={styles.imageView}>
              <CircleImage
                uri
                image={
                  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                styles={styles.profileImage}
              />
              <View style={styles.profile}>
                <TextComponent
                  text={'In Transist'}
                  styles={styles.textTransist}
                />
                <TextComponent
                  text={'In Truck Num GTY 1024'}
                  styles={styles.truckNo}
                />
              </View>
            </View>
          </View>
          <View style={{backgroundColor: Colors.headerBg, flex: 1}}>
            <Tab.Navigator
              screenOptions={{
                tabBarInactiveTintColor: Colors.textGrayColor,
                tabBarActiveTintColor: Colors.primaryColor,
                tabBarHideOnKeyboard: true,
                swipeEnabled: true,
                animationEnabled: true,
                tabBarAllowFontScaling: true,

                tabBarIndicatorStyle: {
                  backgroundColor: Colors.primaryColor,
                  height: hp('0.5'),
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  width: wp('30'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginLeft: wp('10'),
                },
                tabBarLabelStyle: {
                  fontSize: FontSize.scale16,
                  fontWeight: '500',
                  fontFamily: 'Nunito_Bold',
                  textTransform: 'none',
                },
                tabBarStyle: {
                  // marginTop: hp('3'), // Adjust top margin as needed
                  // marginHorizontal: wp('3'), // Adjust horizontal margin as needed
                  backgroundColor: Colors.headerBg, // Change background color if needed
                  // borderTopLeftRadius: 0,
                  // borderTopRightRadius: 10,
                  borderRadius: 0,
                },
              }}>
              {/* <Tab.Screen
          name="Posted"
          options={{tabBarLabel: 'Posted'}}
          component={JobTabs}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Posted'}}
          name="Accepted"
          component={JobsAccepted}
        /> */}
              {['About Driver', 'Trip History'].map(screenName => (
                <Tab.Screen
                  key={screenName}
                  name={screenName}
                  component={
                    screenName === 'About Driver'
                      ? EditProfileScreen
                      : TripHistory
                  }
                  options={{
                    tabBarLabel: capitalizeFirstLetter(screenName),
                  }}
                />
              ))}
            </Tab.Navigator>
          </View>
        </>
      }
    />
  );
};
export default memo(ProfileScreen);
