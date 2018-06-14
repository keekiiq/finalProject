import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});
