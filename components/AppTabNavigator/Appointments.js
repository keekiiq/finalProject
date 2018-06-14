import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

class Appointments extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-person-add" style={{ color: tintColor }} />
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Text style={styles.font}>Appointments</Text>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Appointments;

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
