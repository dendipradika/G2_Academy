import React, { Component } from 'react'
import { View, StyleSheet, Alert } from "react-native"
import { Login, Register, Home, Photo } from "./screens"
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "login",
      userIdOnLogin: "",
      account: [],
      albums: [],
      albumId: "",
      photos: [],
      accountWithRegister: []
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

  changeScreen = screen => {
    console.log("screen: ", screen);
    this.setState({
      screen
    })
  }

  showScreen = () => {
    const { userIdOnLogin, account, albums, albumId, photos, accountWithRegister, screen } = this.state
    if (screen === "login")
      return <Login listUser={account} listUserWithRegister={accountWithRegister} changeScreen={this.changeScreen} checkLogin={this.checkLogin} />

    if (screen === "register")
      return <Register onRegister={this.registration} changeScreen={this.changeScreen} />

    if (screen === "photos")
      return <Photo 
              changeScreen={this.changeScreen}
              userIdOnLogin={userIdOnLogin}
              albumIdOnPress={albumId}
              listPhoto={photos}
              deletePhoto={this.deletePhoto}
            />

    return <Home
              changeScreen={this.changeScreen}
              userIdOnLogin={userIdOnLogin}
              listAlbums={albums}
              detailAlbum={this.detailAlbum}
            />
  }

  checkLogin = (username, password) => {
    this.state.account.map(user => {
      if (username === user.username && !user.password) {
        if (username === user.username && password === "123") {
          return (
            this.setState({userIdOnLogin: user.id}),
            this.changeScreen("home")
          )
        } else {
            return console.log("User Default Password")
          }
        
      } else if (username === user.username && password === user.password) {
        return (
          this.setState({userIdOnLogin: user.id}),
          this.changeScreen("home")
        )
      } else {
          return console.log("User Default Password")
        }
    })
  }

  registration = (data) => {
    let newData = this.state.account
    newData.push(data)
    Alert.alert("Success!!", "Thanks for registration.")
    this.setState({
      account: newData,
      screen: "login"
    })
  }

  deletePhoto = (idPhoto) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${idPhoto}`, {
      method: 'DELETE',
    })
  }

  detailAlbum = (idAlbum) => {
    this.setState({
      albumId: idAlbum,
      screen: "photos"
    })
  }

  render() {
    return (
      <View style={styles.main}>
        { 
          this.showScreen()
        }
      </View>
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