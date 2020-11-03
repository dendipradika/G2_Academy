import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullname: "",
      password: ""
    }
  }

  onRegister = () => {
    const { username, fullname, password } = this.state
    const { onRegister } = this.props
    if (username && password) {
      onRegister({
        username, 
        fullname,
        password
      })
    } else Alert.alert("Warning!!", "Please fulfill the input.")
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          source={require('../assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.TextComponentStyle}>Register Account ..</Text>
        <TextInput onChangeText={username => this.setState({ username })} placeholder="username" style={styles.inputStyle} />
        <TextInput onChangeText={fullname => this.setState({ fullname })} placeholder="fullname" style={styles.inputStyle} />
        <TextInput onChangeText={password => this.setState({ password })} placeholder="**************" secureTextEntry={true} style={styles.inputStyle} />
        <TouchableOpacity onPress={this.onRegister}>
          <View style={styles.button}>
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={{ marginTop: 10 }}>
          <Text style={styles.buttonRegister} onPress={() => this.props.changeScreen("login")}>Do you have account? Login here..</Text>
        </View> */}
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
    margin: 15,
    padding: 20
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
    backgroundColor: "#00cec9",
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

export default Register;