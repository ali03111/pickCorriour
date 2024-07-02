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
import {TextComponent} from '../Components/TextComponent';

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
        <TextComponent text="George Pool" styles={styles.profileName} />
        <TextComponent
          text="Seven Star Transportations"
          styles={styles.profileCompany}
        />
      </View>
      <DrawerItem
        label={() => <TextComponent text="Home" styles={styles.drawerLabel} />}
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
        label={() => (
          <TextComponent text="My Trucks" styles={styles.drawerLabel} />
        )}
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
        label={() => (
          <TextComponent text="My Drivers" styles={styles.drawerLabel} />
        )}
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
        label={() => (
          <TextComponent text="My Profile" styles={styles.drawerLabel} />
        )}
        onPress={() => props.navigation.navigate('ProfileScreen')}
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
        label={() => (
          <TextComponent text="Change Language" styles={styles.drawerLabel} />
        )}
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
        label={() => (
          <TextComponent
            text="Terms And Conditions"
            styles={styles.drawerLabel}
          />
        )}
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
        label={() => (
          <TextComponent text="Contact Us" styles={styles.drawerLabel} />
        )}
        onPress={() => props.navigation.navigate('Contact Us')}
        icon={() => (
          <MaterialCommunityIcons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'email'}
            size={hp('3')}
          />
        )}
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
  profileView: {
    marginBottom: 10,
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
  screenText: {
    fontSize: 16,
  },
  drawerLabel: {
    fontSize: 16,
  },
  dropDown: {},
  profileView: {
    alignSelf: 'center',
    marginBottom: hp('2'),
    aspectRatio: 1,
    height: hp('12'),
  },
});
