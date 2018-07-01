import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import TabItem from '../atom/TabItem'
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
      console.log("Bttn ", id, "was pressed!")
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
          {/* <TabItem title={'reset'} disabled={this.state.overlay == 0} onPress={ () => this.handleToggle.call(this, 0)} color={'red'}/> */}
          <TabItem title={'Filter'} onPress={() => this.handleToggle.call(this, 1)} icon={'ios-funnel-outline'} />
          <ActionTab title={'RESUME'} onPress={() => console.log('Action Btn Pressed!')} _title={'More Actions'} _onPress={() => this.handleToggle.call(this, 2)} />
          <TabItem title={'Search'} onPress={() => this.handleToggle.call(this, 3)} icon={'ios-search'}/>
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
    borderTopWidth: 2,
    borderColor: '#C1C1C1',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 90,
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