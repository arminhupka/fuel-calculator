// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './components/Header/Header'
import Form from './components/Form/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
      />
      <Header
        text='Helloo'
      />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
