import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  
  render() { 
    return ( 
      <NavigationContainer>
        <Router>
        </Router>
      </NavigationContainer>
    );
  }
}
 
export default App;

const styles = StyleSheet.create({})
