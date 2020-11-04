import React, { Component } from 'react';
import { Image, Text, View, FlatList, SafeAreaView, Alert, StyleSheet, ActivityIndicator, TouchableHighlight } from "react-native"
import Swipeable from 'react-native-swipeable-row';

const leftContent = <Text>     Hallo ...</Text>;

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      refreshing: false,
      paging: 0,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true}, this.getData(1))
  }

  getData = (page) => {
    this.setState({   
      refreshing: true,
      paging: page
    })
            
    fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.albumIdOnPress}/photos?_page=${page}&_limit=15`)
    .then(response => response.json())
    .then(json => {
      let data = []
      if (page !== 1) {
        data = [...this.state.users]
      }

      this.setState({ users: [...data, ...json] })
    })
    .catch(err => {
      Alert.alert("Some error has occured!!")
    })
    .finally(() => {
      this.setState({ refreshing: false })
    })
  }

  renderData = ({ item, index }) => {
    return <Swipeable key={index.toString()} leftContent={leftContent} rightButtons={this.rightButton(item.id)} style={styles.itemRow}>
            <Image source={{uri: item.url}} style={styles.itemImage}/>
            <Text style={styles.itemTextTitle}>{item.title}</Text>
            <Text style={styles.itemText}>{item.id}</Text>
          </Swipeable>
    }

  onRefresh = () => {
    this.getData(1)
  }

  loadMore = () => {
    this.getData(this.state.paging + 1)
  }

  renderFooter = () => {
    return (
      this.state.isLoading ?
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>: null
    )
  }

  rightButton = (id) => {
    return (
      [
        <TouchableHighlight
          onPress={() => this.rightButtonOnPress(id)}
        >
          <Text >Delete{id}</Text>
        </TouchableHighlight>
      ]
    )
  }
  
  rightButtonOnPress = (id) => {
    return (
      Alert.alert("Yakin menghapus data ini?")
    )
  }

  render() {
    return(
      <SafeAreaView >
        <View style={styles.MainContainer}>
          <Text style={styles.button} onPress={() => this.props.changeScreen("home")} >Back to list Albums</Text>
          <Text style={styles.textComponentStyle}>Your Photo</Text>        
          <View style={styles.line} />
          {this.state.refreshing ? <ActivityIndicator /> : null}
          <FlatList
            data={this.state.users}
            renderItem={this.renderData}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.renderFooter}
          />
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "70%",
    marginTop: 20,
    backgroundColor: '#f3a683'
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 10,
    padding: 5
  },
  itemTextTitle: {
    fontSize: 17,
    padding: 5,
    textAlign: "center"
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
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
})