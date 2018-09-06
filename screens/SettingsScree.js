import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signOut = async () => {
    const { navigation } = this.props;
    AsyncStorage.clear();
    navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View>
        <Button title="Sign Out"
          onPress={() => {this.signOut()}}
        />
      </View>
    );
  }
}

export default SettingsScreen;
