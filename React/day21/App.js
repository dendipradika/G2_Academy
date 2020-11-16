import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Add, DetailAccount, EditAccount, Home, Login } from "./src/screens"

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLogin: true
     }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          { this.state.isLogin ? 
            <>
              <Stack.Screen name="Dashboard" children={(prop) => <Home 
                {...prop} /> } />
              <Stack.Screen name="Add-User" children={(prop) => <Add
                {...prop} /> } />
              <Stack.Screen name="Detail User" children={(prop) => <DetailAccount
                {...prop} /> } />
              <Stack.Screen name="Edit User" children={(prop) => <EditAccount
                {...prop} /> } />
          </> : <>
            <Stack.Screen 
          name="Login"
          children={(prop) => 
            <Login
              listUser={account}
              checkLogin={this.checkLogin}
              {...prop} 
            />
          } options={{ headerShown: false }} />
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
 
export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    alignItems: "center"
  }
})