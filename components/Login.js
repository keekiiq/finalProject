import React, { Component } from 'react';
import { Image, Text, TextInput, Button, View, StyleSheet } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onLogin() {
    const { onSubmit } = this.props;
    const { username } = this.state;
    onSubmit(username);
  }
  render() {
    return (
      <View style={style.container}>
        <View><Image style={{width: 150, height: 150}} source={{uri: 'https://filestore.hasura.io/v1/file/7723c234-4263-4599-9568-9d6788138c5b'}} /></View>
        <View style={style.loginContainer}>
          <Text>Username:</Text>
          <TextInput style={style.input} onChangeText={text => this.setState({ username: text })} />
          <Button
            onPress={this.onLogin.bind(this)}
            title="Login"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    width: 200
  },
  input: {
    marginTop: 20,
    marginBottom: 20
  }
});
