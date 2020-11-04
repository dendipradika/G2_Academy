import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const Item = ({name, username, onPress, onDelete}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress}>
          <Text>Username: {username}</Text>
        </TouchableOpacity>
        
        <Text>Fullname: {name}</Text>
        
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  deleteButton: {
      marginTop: 5,
      color: "#fff",
      backgroundColor: "#d63031",
      borderRadius: 10,
  }
})