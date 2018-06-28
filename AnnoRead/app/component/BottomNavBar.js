import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

// import TabItem from '../atoms/TabItem'
import ActionTab from '../atom/ActionTab'

export default class BottomNavBar extends Component {
    state = {
      //0: false, 1: filter, 2: more actions, 3: search
      overlay: 0 
    }
    PrimaryButton = (props) => {
      return props.children;
    }
    handleToggle(id) {
      this.setState({
        overlay: id,
      })
    }
    render () {
        // fetch()
        let {PrimaryButton} = this;
        return (
        <View style={styles.container}>
          {/* <Text style={{color: this.state.overlay >= 0 ? 'orange' : 'grey' , fontSize: 16, padding: 8}} onPress={() => { this.state.overlay >= 0 ? this.setState({overlay: -1}) : ''}} backgroundColor={'#000000'} color={'orange'}>
            set "overlayid" in state to -1
          </Text> */}
          {/* <TabItem title={'reset "overlayid" in state'} disabled={this.state.overlay == 0} onPress={ () => this.handleToggle.call(this, 0)} color={'red'} /> */}
          {/* <TabItem title={'filter icon'} onPress={() => this.handleToggle.call(this, 1)}/> */}
          <ActionTab title={'RESUME'} _onPress={''} secondaryTitle={'more actions'} _onPress2={''} />
          {/* <TabItem title={'search icon'} onPress={() => this.handleToggle.call(this, 3)} /> */}
        </View>
        );
    }
}
const stylesConsts = {
  tabButton: {
    color: '#707070'
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color: stylesConsts.tabButton.color,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});