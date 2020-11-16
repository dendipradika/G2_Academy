import React, { Component } from "react";
import { Alert, Image, Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import firestore from '@react-native-firebase/firestore'
import { connect } from 'react-redux'
import { Item } from '../component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.subscriber = firestore().collection("employee").onSnapshot(docs => {
      let users = []
      docs.forEach(doc => {
        users.push({
          docId: doc.id,
          data: doc.data()
        })
      })
      this.props.setData({ users })
    })
  }

  deleteDocs = (id, name) => {
    firestore()
    .collection('employee')
    .doc(id)
    .delete()
    .then(() => {
      Alert.alert(`Account ${name} has been deleted.`)
    });
  }

  render() {
    console.log("render props user -> ", this.props.users.users);
    return ( 
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textComponentStyle}>Welcome { this.props.user }</Text>
        <View style={styles.buttonGroup}>
          <Text onPress={() => this.props.navigation.navigate('Add-User')} >
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
              }}
              style={styles.floatingButtonStyle}
            /> Add Data Employee</Text>
        </View>
        <ScrollView>
          { this.props.users.users.map((usr, index) =>
          
            <Item
              key={index}
              fullNames={usr.data.name}
              userNames={usr.data.username}
              levels={usr.data.role}
              onDetail={() => {
                this.props.navigation.navigate('Detail User', {
                  docsKey: usr.docId
                });
              }}
              onEdit={() => {
                this.props.navigation.navigate('Edit User', {
                  docsKey: usr.docId
                });
              }}
              onDelete={() => this.deleteDocs(usr.docId, usr.data.name)}
            />
            )
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.data.users
})

const mapDispatchToProps = dispatch => ({
  setData: (dataUser) => dispatch({ type: "SET_DATA", payload: dataUser }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  mainContainer :{
    backgroundColor: "#fff",
    flex:1,
    flexDirection: "column",
    padding: 15,
    margin: 15
  },
  view: {
    flex: 1,
    backgroundColor: "white"
  },
  buttonGroup: {
    height: 50,
    flexDirection: "row"
  },
  button: {
    flex: 1,
    margin: 5,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  signOut: {
    marginTop: 10,
    color: "#fff",
    backgroundColor: "#e84393",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15
  },
  text: {
    color: "white"
  },
  textComponentStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  inputStyle: {
    paddingLeft: 15,
    marginBottom: 6,
    height: 45,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1
  }
});