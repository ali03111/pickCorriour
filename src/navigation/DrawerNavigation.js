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
        // icon={() => <Icon name="home" />}
      />
      <DrawerItem
        label="My Trucks"
        onPress={() => props.navigation.navigate('My Trucks')}
        // icon={() => <Icon name="truck" type="font-awesome" />}
      />
      <DrawerItem
        label="My Drivers"
        onPress={() => props.navigation.navigate('My Drivers')}
        // icon={() => <Icon name="drivers-license" type="font-awesome" />}
      />
      <DrawerItem
        label="My Profile"
        onPress={() => props.navigation.navigate('My Profile')}
        // icon={() => <Icon name="user" type="font-awesome" />}
      />
      <DrawerItem
        label="Change Language"
        onPress={() => props.navigation.navigate('Change Language')}
        // icon={() => <Icon name="language" />}
      />
      <DrawerItem
        label="Terms And Conditions"
        onPress={() => props.navigation.navigate('Terms And Conditions')}
        // icon={() => <Icon name="file-text" type="font-awesome" />}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => props.navigation.navigate('Contact Us')}
        icon={() => (
          <Ionicons
            style={styles.dropDown}
            color={Colors.primaryColor}
            name={'home'}
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
      screenOptions={{headerShown: false}}
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
