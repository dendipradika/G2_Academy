import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      docId: "",
      username: "",
      fullname: "",
      email: "",
      address: "",
      password: "",
      role: ""
    }
    this.subscriber = firestore().collection("employee").doc(this.props.route.params.docsKey).onSnapshot(docs => {
      this.setState({
        docId: this.props.route.params.docsKey,
        username: docs._data.username,
        fullname: docs._data.name,
        email: docs._data.email,
        address: docs._data.address,
        password: docs._data.passworde,
        role: docs._data.role

      })
    })
  }

  editAccount = async () => {
    const { username, fullname, email, address, password, role } = this.state
    const { navigation } = this.props

    firestore()
    .collection('employee')
    .doc(this.props.route.params.docsKey)
    .update({
      username,
      name: fullname,
      email,
      address,
      password,
      role
    })
    .then(() => {
      navigation.navigate('Dashboard')
    });
  }

  render() {
    return ( 
      <View style={styles.MainContainer}>
        <Text style={styles.TextComponentStyle}>Edit Data Employee</Text>
        <TextInput value={this.state.username} onChangeText={username => this.setState({ username })} placeholder="username" style={styles.inputStyle} />
        <TextInput value={this.state.fullname} onChangeText={fullname => this.setState({ fullname })} placeholder="fullname" style={styles.inputStyle} />
        <TextInput value={this.state.email} onChangeText={email => this.setState({ email })} placeholder="email" style={styles.inputStyle} />
        <TextInput value={this.state.address} onChangeText={address => this.setState({ address })} placeholder="address" style={styles.inputStyle} />
        <TextInput onChangeText={password => this.setState({ password })} placeholder="**************" secureTextEntry={true} style={styles.inputStyle} />
        <TextInput value={this.state.role} onChangeText={role => this.setState({ role })} placeholder="add role" style={styles.inputStyle} />
        <TouchableOpacity onPress={() => this.editAccount()}>
          <View style={styles.button}>
            <Text>Save Changes</Text>
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