import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { fullNames, userNames, levels, onDelete} = this.props
		
    return ( 
      <View style={ styles.itemContainer}>
        <Image
          source={require('../assets/profil.png')}
          style={ styles.avatar}
        />
        <View style={ styles.desc }>
          <Text style={ styles.descName }> {fullNames} </Text>
          <Text style={ styles.descEmail }> {userNames} </Text>
          <Text style={ styles.descBidang }> {levels} </Text>          
        </View>
        <TouchableOpacity onPress={onDelete}>
          <Text style={ styles.delete }>X</Text>
          </TouchableOpacity>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20
  },
  // input: 
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  descEmail: {
    fontSize: 16
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})