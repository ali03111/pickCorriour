import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';
import {Linking} from 'react-native';

/**
 * The function `useSettingScreen` handles navigation and logout functionality in a setting screen
 * component.
 * @returns The `useSettingScreen` function is returning an object with the following properties and
 * methods:
 */
const useProfileScreen = ({navigate, goBack}) => {
  return {};
};

export default useProfileScreen;
