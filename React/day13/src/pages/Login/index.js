import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import Axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      setAccount(res.data)
    })
  }

  const cekLogin = () => {
    account.map(user => {
      if (username === user.username && password === user.password) {
        return (
          setUsername(""),
          setPassword(""),
          Alert.alert(`Sukses. Hai, ${user.name}`)
        )
      } else {
          return console.log("Username or Password is missmatch")
      }
    })
  }

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TextComponentStyle}>Input your account ..</Text>
      <TextInput placeholder="Username" style={{textAlign: 'center', marginBottom: 6, height: 45}} value={username} onChangeText={(value) => setUsername(value)} />
      <TextInput placeholder="Password" style={{textAlign: 'center', marginBottom: 6, height: 45}} value={password} onChangeText={(value) => setPassword(value)} />
      <Button title="Login" onPress={cekLogin} /> 
      <View style={styles.line} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  MainContainer :{
    backgroundColor: "#fff",
    flex:1,
    justifyContent: 'center',
    margin: 15
  },

  TextComponentStyle: {
    fontSize: 25,
    color: "#000",
    textAlign: 'center',
    marginBottom: 20
  }
});
