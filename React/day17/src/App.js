import React, { Component } from 'react'
import { StyleSheet, Alert } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from "react-redux"

import { Login, Register, Home, Add, HomeUser } from "./screens"
import Axios from 'axios';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      albums: [],
      albumId: "",
      photos: [],
    }
  }

  getData = () => {
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      this.setState({ account: res.data })
    })
  }

  checkLogin = (username, password) => {
    this.getData()
    this.state.account.map(check => {
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

  registration = (data) => {
    Axios.post('http://10.0.2.2:3004/users', data)
    .then(res => {
    })
    console.log("account in regist -> ", this.state.account);
    Alert.alert("Success!!", "Thanks for registration.")
  }

  delete = (item) => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(res => {
      this.getData()
    })
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
        <Tab.Screen name="Register" children={(prop) => <Register onRegister={this.registration} {...prop} /> } />
      </Tab.Navigator>
    )
  }

  render() {
    const { isLoggedIn, doLogout } = this.props
    const { albums, account,  } = this.state
    console.log(this.props.user);console.log(this.props.userId);console.log(this.props.levelUser);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          { this.props.isLogin ? 
            (this.props.levelUser==="HRD") ?
            <>
              <Stack.Screen name="Dashboard" children={(prop) => <Home 
                listUser={account}
                getDatas={this.getData}
                onDelete={this.delete}
                signOut={this.signOut}
                {...prop} /> } />
              <Stack.Screen name="Add-User" children={(prop) => <Add
                listUser={account}
                onRegister={this.registration}
                getDatas={this.getData}
                signOut={this.signOut}
                {...prop} /> } />
            </> : <>
              <Stack.Screen name="DashboardUser" children={(prop) => <HomeUser 
              listUser={account}
              signOut={this.signOut}
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