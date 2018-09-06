import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="SignIn"
            onPress={ () => {
              navigation.navigate('SignIn');
            }}
            color="#0074e4"
          />
        </View>
        <View style={styles.button}>
          <Button title="SignUp"
            onPress={ () => {
              navigation.navigate('SignUp');
            }}
            color="#0074e4"
          />
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: 5,
    marginTop: 5,
  }
});
