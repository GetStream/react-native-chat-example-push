/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { StreamChat } from 'stream-chat';
import { API_KEY, USER_TOKEN, USER_ID, SENDER_ID } from 'react-native-dotenv';

export default class App extends Component {
  async componentDidMount() {
    const client = new StreamChat(API_KEY, null);

    await client.setUser({ id: USER_ID }, USER_TOKEN);

    PushNotification.configure({
      onRegister(token) {
        client
          .addDevice(token.token, token.os === 'ios' ? 'apn' : 'firebase')
          .then(() => {
            console.log(`registered device with token ${token.token}`);
          })
          .catch((e) => {
            console.error(`registering device failed: ${e}`);
          });
      },
      onNotification(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      senderID: SENDER_ID,
      requestPermissions: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Stream Chat Push Test!</Text>
        <Text style={styles.instructions}>
          To get started, allow notifications in this app and then use the
          stream cli to send a test notification
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
