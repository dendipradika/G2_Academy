import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { Login, Register, Home } from "../screens"
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "login",
      users: [{
        email: "admin@admin.com",
        password: "admins"
      }],
      account: [],
      accountWithRegister: [],
      selectedUser:{},
      selectName: ""
    }
  }

  componentDidMount = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.setState({account: res.data})
    })

    Axios.get('http://10.0.2.2:3004/users')
    .then(resp => {
      this.setState({accountWithRegister: resp.data})
    })
  }

  addUsers = (data) => {
    Axios.post('http://10.0.2.2:3004/users', data)
    .then(res => {
      this.setState({
        screen: "login"
      })
    })
  }

  changeScreen = screen => {
    console.log("screen: ", screen);
    this.setState({
      screen
    })
  }

  showScreen = () => {
    const { account, accountWithRegister, screen } = this.state
    if (screen === "login")
      return <Login listUser={account} listUserWithRegister={accountWithRegister} changeScreen={this.changeScreen} />

    if (screen === "register")
      return <Register onRegister={this.addUsers} changeScreen={this.changeScreen} />

    return <Home
              listUser={account}
              listUserWithRegister={accountWithRegister}
              changeScreen={this.changeScreen}
              submit={this.submit}
              selectItem={this.selectItem}
              onEdit={this.edit}
            />
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