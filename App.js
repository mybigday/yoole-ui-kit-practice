import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from '@fugood/mybigday-ui-kit';

import Meituan from './app/Meituan';
import Home from './app/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
