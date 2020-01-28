import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchForm from './views/SearchForm';
import SearchResults from './views/SearchResults';

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchForm
  },
  Results: {
    screen: SearchResults
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
  
}
