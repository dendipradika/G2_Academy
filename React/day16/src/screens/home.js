import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Item } from '../component';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      idAlbum: "",
      title: "",
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

  home = () => {
    const { userIdOnLogin, listAlbums, navigation } = this.props
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.button} onPress={() => this.onSignOut()} >Logout</Text>
        <Text style={styles.textComponentStyle}>Your Album</Text>        
        <View style={styles.line} />
        <ScrollView>
        {
          listAlbums.map(album => {
            if (album.userId === userIdOnLogin ) {
            return <Item
              key={album.id}
              title={album.title}
              onDetail={() => navigation.navigate('Photos', {
                albumId: album.id
              })}
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