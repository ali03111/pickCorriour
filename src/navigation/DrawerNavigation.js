import * as React from 'react';
import {Button, StyleSheet, View, Image, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CircleImage} from '../Components/CircleImage';
import {demoProfile} from '../Assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {hp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <CircleImage image={demoProfile} styles={styles.profileView} />
        <Text style={styles.profileName}>George Pool</Text>
        <Text style={styles.profileCompany}>Seven Star Transportations</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        icon={() => (
          <Ionicons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'home'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="My Trucks"
        onPress={() => props.navigation.navigate('My Trucks')}
        icon={() => (
          <MaterialCommunityIcons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'truck-fast'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="My Drivers"
        onPress={() => props.navigation.navigate('My Drivers')}
        icon={() => (
          <Ionicons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'card-outline'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="My Profile"
        onPress={() => props.navigation.navigate('My Profile')}
        icon={() => (
          <AntDesign
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'user'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="Change Language"
        onPress={() => props.navigation.navigate('Change Language')}
        icon={() => (
          <Fontisto
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'world-o'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="Terms And Conditions"
        onPress={() => props.navigation.navigate('Terms And Conditions')}
        icon={() => (
          <MaterialCommunityIcons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'clipboard-list-outline'}
            size={hp('3')}
          />
        )}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => props.navigation.navigate('Contact Us')}
        icon={() => (
          <MaterialCommunityIcons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'email'}
            size={hp('3')}
          />
        )}

        // icon={() => <Icon name="envelope" type="font-awesome" />}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      //   screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        options={{
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
        name="List View"
        component={HomeScreen}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileCompany: {
    fontSize: 14,
    color: 'gray',
  },
  profileView: {
    alignSelf: 'center',
    marginBottom: hp('2'),
    aspectRatio: 1,
    height: hp('12'),
  },
});
