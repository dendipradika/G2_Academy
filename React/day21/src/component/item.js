import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends Component {
  render() { 
    const { fullNames, userNames, levels, onDelete, onDetail, onEdit } = this.props
    
    return ( 
      <View style={ styles.itemContainer}>
        <Image source={require('../assets/profil.png')} style={ styles.avatar} />
        <View style={ styles.desc }>
          <TouchableOpacity onPress={onDetail}><Text style={ styles.labelFullname }> {fullNames} </Text></TouchableOpacity>
          <Text style={ styles.labelEmail }> {userNames} | 
            <Text style={ styles.labelAccessCamera }> {levels} </Text>
          </Text>
        </View>
        <TouchableOpacity onPress={onEdit}><Text style={ styles.buttonAllow }> Edit     </Text></TouchableOpacity>
        <TouchableOpacity onPress={onDelete}><Text style={ styles.buttonDelete }>Delete</Text></TouchableOpacity>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20
  },
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
  labelFullname: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  labelEmail: {
    fontSize: 16
  },
  labelAccessCamera: {
    fontSize: 12,
    marginTop: 8
  },
  buttonDelete: {
    marginTop: 6,
    fontSize: 12,
    color: '#d63031'
  },
  buttonAllow: {
    marginTop: 6,
    fontSize: 12,
    color: '#0984e3'
  }
})