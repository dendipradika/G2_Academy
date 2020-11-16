import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import firestore from '@react-native-firebase/firestore'

class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users : []
     }
    this.getUser()
    this.subscriber = firestore().collection("employee").onSnapshot(docs => {
      let users = []
      docs.forEach(doc => {
        users.push(doc.data())
      })
      this.setState({ users })
    })
    // await firestore().settings({
    //   persistence: false
    // })
    // firestore()
    // .collection('employee')
    // .get()
    // .then(querySnapshot => {
    //   console.log('Total users: ', querySnapshot.size);
    //   querySnapshot.forEach(documentSnapshot => {
    //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //   });
    // });
  }

  getUser = async () => {
    const userDocument = await firestore().collection("employee").doc('49TdnuzA9f3Mm2g2WBXP').get()
    console.log(userDocument);
  }

  addRandom = async () => {
    let name = Math.random().toString(36).substring(7)
    firestore().collection('employee').add({
      name
    })
    .then(() => {
      console.log('User added!');
    });
  }

  render() { 
    return ( 
      <View>
        <Button title="Add" onPress={this.addRandom} />
        { this.state.users.map((user, index) =>
          <View key={index}>
            <Text>{user.name}</Text>
          </View>)
        }
      </View>
     );
  }
}
 
export default FirebaseApp;