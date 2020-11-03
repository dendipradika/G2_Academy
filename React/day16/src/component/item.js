import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title, onDetail} = this.props
    return ( 
      <View style={styles.container}>
          <TouchableOpacity onPress={onDetail}>
            <Text style={styles.box}>Title : {title}</Text>
          </TouchableOpacity>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomColor: "#d63031",
    borderBottomWidth: 7,
    borderRadius: 10

  },
  deleteButton: {
      color: "#fff",
      backgroundColor: "#d63031",
      textAlign: "center"
  },
  box: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    backgroundColor: "#ccc"
  },
  nullContent: {
    backgroundColor: "#d63031"
  }
})