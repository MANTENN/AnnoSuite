import React, { Component } from 'react';
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


interface State {
  isOverlayVisible: boolean
}

export default class Root extends Component<any, State> {
    constructor() {
      super()
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