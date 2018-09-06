import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { AuthLoadingScreen } from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScree';

console.disableYellowBox = ['Remote debugger'];

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

const AppTabNavigator = createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Settings: {
    screen: SettingsScreen,
  }
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'App Name',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="ios-menu" size={24}
            style={{ paddingHorizontal: 10 }}
          />
        </TouchableOpacity>
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
});

export default createSwitchNavigator ({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
