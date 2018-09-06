import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button title="SignIn"
          onPress={ () => {
            navigation.navigate('SignIn');
          }}
        />
        <Button title="SignUp"
          onPress={ () => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
