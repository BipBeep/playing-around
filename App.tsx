import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Provider } from 'react-redux'

import Counter from './components/counter'
import DataLake from './model/store'
import AppButtons from './components/appbuttons';

export default class App extends Component {
    render() {
        return (
            <Provider store={DataLake}>
                <View style={styles.container}>
                    <Counter />
                    <AppButtons />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'space-around',
    },
  });
