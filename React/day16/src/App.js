import React, { Component } from 'react'
import { StyleSheet, Alert } from "react-native"
import { Login, Register, Home, Photo } from "./screens"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdOnLogin: "",
      account: [],
      albums: [],
      albumId: "",
      photos: [],
      isLogin: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      this.setState({ account: json})
    })
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseAlbum => responseAlbum.json())
    .then(jsonAlbum => {
      this.setState({ albums: jsonAlbum})
    })
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(responsePhoto => responsePhoto.json())
    .then(jsonPhoto => {
      this.setState({ photos: jsonPhoto})
    })
  }

  checkLogin = (username, password) => {
    this.state.account.map(user => {
      if (username === user.username && !user.password) {
        if (username === user.username && password === "123") {
          return (
            this.setState({userIdOnLogin: user.id, isLogin: true})
          )
        } else {
            return console.log("User Default Password")
          }
        
      } else if (username === user.username && password === user.password) {
        return (
          this.setState({userIdOnLogin: user.id, isLogin: true})
        )
      } else {
          return console.log("User Default Password")
        }
    })
  }

  signOut = () => {
    this.setState({
      userIdOnLogin: "",
      isLogin: false
    })
  }

  registration = (data) => {
    let newData = this.state.account
    newData.push(data)
    Alert.alert("Success!!", "Thanks for registration.")
    this.setState({
      account: newData
    })
  }

  detailAlbum = (idAlbum) => {
    this.setState({
      albumId: idAlbum
    })
  }

  tabMains = () => {
    const { account, accountWithRegister } = this.state
    return (
      <Tab.Navigator>
        <Tab.Screen name="Login" children={(prop) => <Login listUser={account} listUserWithRegister={accountWithRegister} changeScreen={this.changeScreen} checkLogin={this.checkLogin} {...prop} /> } />
        <Tab.Screen name="Register" children={(prop) => <Register onRegister={this.registration} changeScreen={this.changeScreen} {...prop} /> } />
      </Tab.Navigator>
    )
  }

  render() {
    const { userIdOnLogin, albums, albumId, photos, } = this.state
    return (
      <NavigationContainer>
        <Stack.Navigator>
          { this.state.isLogin ? 
          <>
            <Stack.Screen name="Dashboard" children={(prop) => <Home 
               userIdOnLogin={userIdOnLogin}
               listAlbums={albums}
               detailAlbum={this.detailAlbum}
               signOut={this.signOut}
               {...prop} /> } />
            <Stack.Screen name="Photos" children={(prop) => <Photo 
              userIdOnLogin={userIdOnLogin}
              albumIdOnPress={albumId}
              listPhoto={photos}
              deletePhoto={this.deletePhoto}
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

export default App;