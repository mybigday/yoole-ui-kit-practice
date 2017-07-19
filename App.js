import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from '@fugood/mybigday-ui-kit';
import { Provider } from 'react-redux';

import Root from './app/index';
import configureStore from './store';

let store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
