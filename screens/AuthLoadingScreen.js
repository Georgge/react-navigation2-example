import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native'

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.loadApp();
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    const { navigation } = this.props;
    navigation.navigate(userToken?'App':'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

export default AuthLoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});