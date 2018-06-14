import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

class Chat extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-chatboxes" style={{ color: tintColor }} />
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Text style={styles.font}>Chat</Text>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Chat;

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
