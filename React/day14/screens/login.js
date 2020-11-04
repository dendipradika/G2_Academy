import Axios from 'axios';
import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, TouchableOpacity, Alert, ImageBackground } from 'react-native';


class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        email: "",
        password: ""
      }
  }

  onLogin = () => {
    const { email, password } = this.state
    const { listUser, changeScreen } = this.props
        
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      if (res.data.length > 0) { 
        res.data.map((akun) => {
          if (email === akun.username && password === akun.password) {
            return (
              changeScreen("home")
            )
          } else if ( password === "123" ) {
            listUser.map((akun) => {
              if (email === akun.username && password === "123") {
                return (
                  changeScreen("home")
                )
              } else {
                  return console.log("User Default Password")
                }
            })
          } else {
              return console.log("Username or Password is missmatch")
          }
        })
      } else {
          listUser.map((akun) => {
            if (email === akun.username && password === "123") {
              return (
                changeScreen("home")
              )
            } else {
                return console.log("User Default Password")
              }
          })
      }
    })
  }

    render() {
        return (
            <View style={styles.MainContainer}>
            <ImageBackground
              source={require('../src/assets/logo.png')}
              style={styles.image}
            />
              <Text style={styles.TextComponentStyle}>Input your account ..</Text>
                <TextInput onChangeText={email => this.setState({ email })} placeholder="user@email.com" style={styles.inputStyle} />
                <TextInput onChangeText={password => this.setState({ password })} placeholder="**************" secureTextEntry={true} style={styles.inputStyle} />
                <TouchableOpacity onPress={this.onLogin}>
                    <View style={styles.button}>
                        <Text>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.buttonRegister} onPress={() => this.props.changeScreen("register")} >Doesn't have an account? Register here..</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  MainContainer :{
    backgroundColor: "#fff",
    flex:1,
    flexDirection: "column",
    justifyContent: 'center',
    margin: 15
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputStyle: {
    paddingLeft: 15,
    marginBottom: 6,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1
  },
  TextComponentStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
      marginTop: 10,
      color: "#fff",
      backgroundColor: "#e84393",
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 10,
      alignSelf: "center"
  },
  buttonRegister: {
      marginTop: 10,
      color: "#e84393",
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 10,
      alignSelf: "center"
  }
})

export default Login;