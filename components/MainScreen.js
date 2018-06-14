import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Calendar from './AppTabNavigator/Calendar';
import Appointments from './AppTabNavigator/Appointments';
import Chat from './AppTabNavigator/Chat';
import Profile from './AppTabNavigator/Profile';
import Notification from './AppTabNavigator/Notification';

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AppTabNavigator />;
  }
}
export default MainScreen;

const AppTabNavigator = TabNavigator(
  {
    Calendar: {
      screen: Calendar
    },
    Appointments: {
      screen: Appointments
    },
    Chat: {
      screen: Chat
    },
    Profile: {
      screen: Profile
    },
    Notification: {
      screen: Notification
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        elevation: 5,
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },
      activeTintColor: '#71B2F9',
      inactiveTintColor: 'grey'
    }
  }
);
