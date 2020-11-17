import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ItemUser } from '../component';

class HomeUser extends Component {

  onSignOut = () => {
    this.props.signOut()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.buttonPink} onPress={() => this.onSignOut()} >Logout</Text>
        <Text style={styles.textComponentStyle}>Haii { this.props.user }</Text>        
        <View style={styles.line} />
        <ScrollView>
            {
              this.props.listUser.map(usr => {
                if (usr.id === this.props.userId ) {
                  if (usr.allow_camera === "Y") {
                    if(usr.picture_file === "") {
                      return (
                        <View key={usr.id}>
                          <Text onPress={() => this.props.navigation.navigate('Camera')}>Take a picture</Text>
                          <ItemUser
                            key={usr.id}
                            fullNames={usr.fullname}
                            userNames={usr.username}
                            levels={usr.level}
                            accessCamera={usr.allow_camera}
                          />
                        </View>
                      )
                    } else {
                      return (
                        <View key={usr.id}>
                          <Text onPress={() => this.props.navigation.navigate('Camera')}>Take a picture</Text>
                          <ItemUser
                            key={usr.id}
                            fullNames={usr.fullname}
                            userNames={usr.username}
                            levels={usr.level}
                            accessCamera={usr.allow_camera}
                          />
                          <Image
                            style={styles.floatingButtonStyle}
                            source={require('../assets/logo.png')}
                          />
                        </View>
                      )
                    }
                  } else {
                    return <ItemUser
                      key={usr.id}
                      fullNames={usr.fullname}
                      userNames={usr.username}
                      levels={usr.level}
                    />
                  }
                }
              })
            }
        </ScrollView> 
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  userId: state.auth.userId,
  levelUser: state.auth.levelUser
})

export default connect(mapStateToProps, null)(HomeUser);

const styles = StyleSheet.create({
  mainContainer :{
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
  buttonPink: {
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
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  }
})