import React, { Component } from 'react'
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from "react-redux"

import { Login, Register, Home, Add, HomeUser, Camera } from "./screens"
import { Apps } from "./Apps"
import { BaseManager } from "./database/index";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export class App extends Component {
  manager = new BaseManager();
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      albums: [],
      albumId: "",
      photos: [],
      datas: []
    }
  }

  getTable() {
    this.manager
      .getTable()
      .then(val => {
        console.log(val);
        this.setState({ datas: val });
      })
      .catch(err => {
        console.log("Error in getTable -> ", err);
      });
  }

  checkLogin = (username, password) => {
    this.getTable()
    console.log("log checklogin -> ", this.state.datas);
    this.state.datas.map(check => {
      if (username === check.username && password === check.password) {
          return this.props.doLogin(username, check.id, check.level)
      } else {
          return console.log("Account is invalid")
        }
    })
  }

  signOut = () => {
    this.props.doLogout()
  }

  tabMains = () => {
    const { account } = this.state
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Login"
          children={(prop) => 
            <Login
              listUser={account}
              checkLogin={this.checkLogin}
              {...prop} 
            />
          }
        />
        <Tab.Screen 
          name="Register"
          children={(prop) => 
            <Register 
              onRegister={this.registration}
              {...prop}
            />
          }
        />
      </Tab.Navigator>
    )
  }

  render() {
    const { datas, account  } = this.state

    return (
      <NavigationContainer>
        <Stack.Navigator>
          { this.props.isLogin ? 
            (this.props.levelUser==="HRD") ?
            <>
              <Stack.Screen name="Dashboard" children={(prop) => <Home 
                listUser={datas}
                getTable={this.getTable}
                signOut={this.signOut}
                {...prop} /> } />
              <Stack.Screen name="Add-User" children={(prop) => <Add
                signOut={this.signOut}
                {...prop} /> } />
              <Stack.Screen name="Camera" children={(prop) => <Camera
                {...prop} /> } />
            </> : <>
              <Stack.Screen name="Dashboard" children={(prop) => <HomeUser 
              listUser={datas}
              signOut={this.signOut}
              {...prop} /> } />
              <Stack.Screen name="Camera" children={(prop) => <Camera
                {...prop} /> } />
          </> : <>
            <Stack.Screen name="TabMain" component={this.tabMains} options={{ headerShown: false }} />
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    alignItems: "center"
  }
})

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId,
  levelUser: state.auth.levelUser
})

const mapDispatchToProps = dispatch => ({
  doLogin: (user, userId, lvlUser) => dispatch({ type: "LOGIN", payload: user, loadId: userId, userLevel: lvlUser }),
  doLogout: () => dispatch({ type: "LOGOUT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);