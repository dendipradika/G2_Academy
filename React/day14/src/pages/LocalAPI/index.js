import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import Axios from 'axios';

const Item = ({name, username, onPress, onDelete}) => {
  return (
    <View>
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
      </TouchableOpacity>
      <Text>{username}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  )
}
const LocalAPI = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  const [button, setButton] = useState("Simpan")
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const submit = () => {
    const data = { name, username, password }
    // console.log("data, ");
    if(button === 'Simpan'){
      Axios.post('http://10.0.2.2:3004/users', data)
      .then(res => {
        setName("")
        setUsername("")
        setPassword("")
        getData()
      })
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
      .then(res => {
        // console.log("update", res);
        setName("")
        setUsername("")
        setPassword("")
        getData()
        setButton("Simpan")
      })
    }
  }

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => {
// console.log(res);
setAccount(res.data)
    })
  }

  const selectItem = (item) => {
    setSelectedUser(item)
    setName(item.name)
    setUsername(item.username)
    setButton("Update")
  }

  const deleteItem = (item) => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(res => {
      getData()
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
      <TextInput placeholder="Email" style={styles.input} value={username} onChangeText={(value) => setUsername(value)} />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={(value) => setPassword(value)} />
      <Button title={button} onPress={submit} /> 
      <View style={styles.line} />
      {account.map(user => {
        return <Item 
            key={user.id}
            name={user.name}
            username={user.username}
            onPress={() => selectItem(user)}
            onDelete={() => deleteItem(user)}
          />
      })}
    </View>
  )
}

export default LocalAPI

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18}
})
