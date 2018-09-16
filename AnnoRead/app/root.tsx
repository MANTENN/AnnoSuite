import React, { Component } from 'react';
import { PermissionsAndroid } from 'react-native'

import {
  StatusBar,
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView
} from 'react-native';

import Books from './component/Books'
import ActionBar from './component/ActionBar'

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

interface State {
  isOverlayVisible: boolean
}

export interface Props {
  
}

export default class Root extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      console.log(props);
      this.Overlay = this.Overlay.bind(this)
    }
    state = {
      isOverlayVisible: true
    }
    styles = StyleSheet.create({
      overlay: {
        position: 'absolute',
        left: 1,
        top: 0,
        flex: 1,  
        zIndex: 0,
        backgroundColor: 'orange'
      },
      overlayHidden: {

      }
    })

    Overlay() {
      let { isOverlayVisible } = this.state;
      let {overlay, overlayHidden} = this.styles;
      return (
        <View style={isOverlayVisible ? overlay : overlayHidden}/>
      );
    }
    render () {
        let { Overlay } = this;
        return (
          <React.Fragment>
            <View style={styles.container}>
               <StatusBar
                  hidden={true}
                  backgroundColor="#000"
                  barStyle="dark-content"
                />
              <Books />
            </View>
            <ActionBar />
            <Overlay />
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});