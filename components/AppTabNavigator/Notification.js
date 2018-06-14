import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

class Notification extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" style={{ color: tintColor }} />
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Text style={styles.font}>Notification</Text>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#71B2F9'
  },
  font: {
    fontSize: 20,
    color: 'white'
  }
});
