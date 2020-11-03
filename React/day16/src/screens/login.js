import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: "",
        password: ""
      }
  }

  onLogin = () => {
    const { username, password } = this.state

    this.props.checkLogin(username, password)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          source={require('../assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.TextComponentStyle}>Input your account ..</Text>
        <TextInput onChangeText={username => this.setState({ username })} placeholder=" username " style={styles.inputStyle} />
        <TextInput onChangeText={password => this.setState({ password })} placeholder=" ************** " secureTextEntry={true} style={styles.inputStyle} />
        <TouchableOpacity onPress={this.onLogin}>
          <View style={styles.button}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={{ marginTop: 10 }}>
          <Text style={styles.buttonRegister} onPress={() => this.props.changeScreen("register")} >Doesn't have an account? Register here..</Text>
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