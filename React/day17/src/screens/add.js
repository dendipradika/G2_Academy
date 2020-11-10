import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      fullname: "",
      password: "",
      level: ""
     }
  }

  onRegister = async () => {
    const { username, fullname, password, level } = this.state
    const { onRegister, getData, navigation } = this.props
    if (username && password && level) {
      await onRegister({
        fullname,
        username, 
        password,
        level
      })
      navigation.navigate('Dashboard')
    } else Alert.alert("Warning!!", "Please fulfill the input.")
  }

  render() {
    return ( 
      <View style={styles.MainContainer}>
        <Text style={styles.TextComponentStyle}>Add user</Text>
        <TextInput onChangeText={fullname => this.setState({ fullname })} placeholder="fullname" style={styles.inputStyle} />
        <TextInput onChangeText={username => this.setState({ username })} placeholder="username" style={styles.inputStyle} />
        <TextInput onChangeText={password => this.setState({ password })} placeholder="**************" secureTextEntry={true} style={styles.inputStyle} />
        <TextInput onChangeText={level => this.setState({ level })} placeholder="add level" style={styles.inputStyle} />
        <TouchableOpacity onPress={this.onRegister}>
          <View style={styles.button}>
            <Text>Add Useer</Text>
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

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId
})

export default connect(mapStateToProps, null)(Add);