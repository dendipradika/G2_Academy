import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const Item = ({name, username, onPress, onDelete}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>Username: {username}</Text>
      </TouchableOpacity>
          
      <Text>Fullname: {name}</Text>
          
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const Home = ({ changeScreen }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  const [button, setButton] = useState("Update")
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const submit = () => {
    const data = { username, fullname, password }
    
    Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
    .then(res => {
      setFullName("")
      setUsername("")
      setPassword("")
      getData()
    })
  }

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      setAccount(res.data)
    })
  }

  const selectItem = (item) => {
    setSelectedUser(item)
    setUsername(item.username)
    setFullName(item.fullname)
    setButton("Update")
  }

  const deleteItem = (item) => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(res => {
      getData()
    })
  }

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.button} onPress={() => changeScreen("login")} >Logout</Text>
      <Text style={styles.TextComponentStyle}>Form Edit Data</Text>
      <TextInput placeholder="Username" style={styles.inputStyle} value={username} onChangeText={(value) => setUsername(value)} />
      <TextInput placeholder="Fullname" style={styles.inputStyle} value={fullname} onChangeText={(value) => setFullName(value)} />
      <TextInput placeholder="Password" style={styles.inputStyle} value={password} onChangeText={(value) => setPassword(value)} />
      <Button title={button} onPress={submit} /> 
      
      <View style={styles.line} />
      <ScrollView>
      {
        account.map(user => {
          return <Item 
            key={user.id}
            username={user.username}
            name={user.fullname}
            onPress={() => selectItem(user)}
            onDelete={() => deleteItem(user)}
          />
        })
      }
          </ScrollView>
    </View>
  );
}
 
export default Home;

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
  deleteButton: {
      marginTop: 5,
      marginBottom: 20,
      color: "#d63031",
      borderRadius: 10,
  }
})