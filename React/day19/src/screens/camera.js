import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from "react-redux"
import { RNCamera } from 'react-native-camera';
import { BaseManager } from "../database/index";

export class Camera extends Component {
  manager = new BaseManager();
  constructor(props) {
    super(props);
    this.state = {
      img : '',
    }
  }
  
  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    
    this.setState({
      img: data.uri
    })        

    this.manager
    .savePicture(this.props.userId, data.uri)
    .then(val => {
    })
    .catch(err => {
      alert("err onAllowCamera", err);
    });
  };

  render() {
    const{ img } = this.state;

    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          {({ camera }) => {
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>                
              </View>
            );
          }}
        </RNCamera>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>          
            <Image  source={{uri:img}} style={{  width: 200, height: 200}}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId
})

export default connect(mapStateToProps, null)(Camera);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});