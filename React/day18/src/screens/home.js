import React, { Component } from "react";
import { Image, Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BaseManager } from "../database/index";
import { Item } from '../component';

const Drawer = createDrawerNavigator();

export class Home extends Component {
  manager = new BaseManager();
  constructor(props) {
    super(props);

    this.state = {
      datas: []
    };
  }

  getTable() {
    this.manager
      .getTable()
      .then(val => {
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }

  deleteUser(id) {
    this.manager
      .deleteUser(id)
      .then(val => {
        console.log("deleted user -> ", val);
      })
      .catch(err => {
        alert("err delete", err);
      });
  }

  onSignOut = () => {
    this.props.signOut()
  }

  home = () => {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.signOut} onPress={() => this.onSignOut()} >Logout</Text>
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
            {
              console.log(this.props.listUser),
              this.props.listUser.map(usr => {
                return <Item
                  key={usr.id}
                  fullNames={usr.fullname}
                  userNames={usr.username}
                  levels={usr.level}
                  onDelete={() => this.deleteUser(usr.id)}
                />
              })
            }
        </ScrollView> 
      </SafeAreaView>
    );
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

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId,
  levelUser: state.auth.levelUser
})

export default connect(mapStateToProps, null)(Home);
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
  }
});