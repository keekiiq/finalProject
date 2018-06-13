import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Chat from './components/Calendar';
import Login from './components/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      username: ''
    };
  }
  onLogin(username) {
    this.setState({ username, status: true });
  }
  onLogout() {
    this.setState({ username: '', status: false });
  }
  render() {
    const { status, username } = this.state;
    return (
      // <Chat username={username} />
        status ? <Chat onLogout={this.onLogout.bind(this)} username={username} /> :
        <Login onSubmit={this.onLogin.bind(this)} />
    );
  }
}
