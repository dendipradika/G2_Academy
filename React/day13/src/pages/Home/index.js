import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Login from '../Login'

const Home = (navigation) => {
  return (
    <View>
      <Text>Dashboard</Text>
        {/* <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
