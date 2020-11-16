import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux'
import { ItemDetail } from '../component';

class DetailAccount extends Component {
  render() {
    return ( 
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textComponentStyle}>Detail Data Employee</Text>
        <ScrollView>
          { this.props.users.users.map((usr, index) => {
            if (usr.docId === this.props.route.params.docsKey) {
            return <ItemDetail
                key={index}
                fullNames={usr.data.name}
                userNames={usr.data.username}
                levels={usr.data.role}
                address={usr.data.address}
                email={usr.data.email}
              />
            }})
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.data.users
})

export default connect(mapStateToProps, null)(DetailAccount);

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