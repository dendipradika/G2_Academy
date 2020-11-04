import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import Axios from 'axios';
import Login from '../Login'


const Register = (navigation) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const data = { name, username, password }
    Axios.post('http://10.0.2.2:3004/users', data)
    .then(res => {
      setName("")
      setUsername("")
      setPassword("")
      Alert.alert(`Sukses. Silahkan login`)
      navigation.navigate('Home')
    })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Register Account</Text>
      <TextInput placeholder="Fullname" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={(value) => setUsername(value)} />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={(value) => setPassword(value)} />
      <Button title="Register" onPress={submit} /> 
      <View style={styles.line} />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18}
})
