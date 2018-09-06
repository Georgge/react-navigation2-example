import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

class SignInScreen extends Component {
  signIn = async() => {
    const { navigation } = this.props;
    await AsyncStorage.setItem('userToken', 'Georgge');
    navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View>
        <Button title="Complete SignIn"
          onPress={ () => {
            this.signIn()
          }}
        />
      </View>
    );
  }
}

export default SignInScreen;
