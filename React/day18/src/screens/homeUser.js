import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux'

import { Item } from '../component';
import Axios from 'axios';

const Drawer = createDrawerNavigator();

class HomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      idAlbum: "",
      fullNames: "",
      userNames: "",
      onDetail: "",
      onDelete: ""
     }
  }

  onSignOut = () => {
    this.props.signOut()
  }

  home = () => {
    const { listUser } = this.props
    console.log("account -> ", listUser);
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.button} onPress={() => this.onSignOut()} >Logout</Text>
        <Text style={styles.textComponentStyle}>Haii { this.props.user }</Text>        
        <View style={styles.line} />
        <ScrollView>
            {
              listUser.map(usr => {
                if (usr.id === this.props.userId ) {
                  return <Item
                    key={usr.id}
                    fullNames={usr.fullname}
                    userNames={usr.username}
                    levels={usr.level}
                  />
                }
              })
            }
        </ScrollView> 
      </View>
    )
  }

  changePassword = () => {
    return (
      <Text>Ini akan digunakan untuk halaman mengganti password</Text>
    )
  }

  render() {
    return ( 
      <Drawer.Navigator initialRouteName="Homes">
        <Drawer.Screen name="Homes" component={this.home} />
        <Drawer.Screen name="Change Password" component={this.changePassword} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
    backgroundColor: "#fff",
    flex:1,
    flexDirection: "column",
    padding: 15,
    margin: 15
  },
  textComponentStyle: {
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

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId
})

export default connect(mapStateToProps, null)(HomeUser);