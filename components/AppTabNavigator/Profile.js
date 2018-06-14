import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-person" style={{ color: tintColor }} />
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Text style={styles.font}>Profile</Text>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Profile;

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
