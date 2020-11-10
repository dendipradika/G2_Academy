import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux'

import { Item } from '../component';

const Drawer = createDrawerNavigator();

class Home extends Component {
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

  onDetailAlbum = (item) => {
    this.props.detailAlbum(item.id)
  }

  onDeleteAlbum = (item) => {
    this.props.deleteAlbum(item.id)
  }

  onSignOut = () => {
    this.props.signOut()
  }
  
  clickHandler = () => {
    alert('Floating Button Clicked');
  };

  home = () => {
    const { listUser, getDatas, onDelete, navigation } = this.props
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.button} onPress={() => this.onSignOut()} >Logout</Text>
        <Text>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Add-User')}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
        </Text>
        <Text style={styles.textComponentStyle}>List Employee { this.props.user }</Text>        
        <View style={styles.line} />
        <ScrollView>
            {
              listUser.map(usr => {
                return <Item
                  key={usr.id}
                  fullNames={usr.fullname}
                  userNames={usr.username}
                  levels={usr.level}
                  onDelete={() => onDelete(usr)}
                />
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
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
 },
 floatingButtonStyle: {
   resizeMode: 'contain',
   width: 50,
   height: 50,
 },
})

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId,
  levelUser: state.auth.levelUser
})

export default connect(mapStateToProps, null)(Home);