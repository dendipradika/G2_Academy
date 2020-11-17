import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { BaseManager } from "../database/index";

export class Add extends Component {
  manager = new BaseManager();
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      fullname: "",
      password: "",
      level: ""
     }
  }

  addData() {
    const { username, fullname, password, level } = this.state
    const { navigation } = this.props
    
    this.manager
      .addData(fullname, username, password, level)
      .then(val => {
        alert("Success"),
        navigation.navigate('Dashboard')
      })
      .catch(err => {
        alert("Failed : ", err);
      });
  }

  render() {
    return ( 
      <View style={styles.MainContainer}>
        <Text style={styles.TextComponentStyle}>Add Employee</Text>
        <TextInput onChangeText={fullname => this.setState({ fullname })} placeholder="fullname" style={styles.inputStyle} />
        <TextInput onChangeText={username => this.setState({ username })} placeholder="username" style={styles.inputStyle} />
        <TextInput onChangeText={password => this.setState({ password })} placeholder="**************" secureTextEntry={true} style={styles.inputStyle} />
        <TextInput onChangeText={level => this.setState({ level })} placeholder="add level" style={styles.inputStyle} />
        <TouchableOpacity onPress={() => this.addData()}>
          <View style={styles.button}>
            <Text>Add User</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
    backgroundColor: "#fff",
    flex:1,
    flexDirection: "column",
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

export default Add;