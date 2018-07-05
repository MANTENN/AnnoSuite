import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import TabItem from '../atom/TabItem'
import ActionTab from '../atom/ActionTab'
import Panel from '../atom/Panel'

export default class ActionBar extends Component {
  constructor() {
    super()

    // tihs.Panel = this.handleToggle.bind(this)
  }
  state = {
    //0: false, 1: filter, 2: more actions, 3: search
    overlay: 0 
  }
  PrimaryButton = (props) => {
    return props.children;
  }
  handleToggle(btn, id) {
    console.log(btn, "was pressed!")
    this.setState({
      overlay: id,
    })
  }
  render () {
    // fetch()
    let {PrimaryButton} = this;
    return (
    <React.Fragment>
      <Panel style={styles.panel} overlay={this.state.overlay} hideOverlay={() => this.handleToggle.call(this, 'Overlay', 0)}/>
      <View style={styles.container}>
        <TabItem title={'Filter'} onPress={() => this.handleToggle.call(this, 'Filter', 1)} icon={'filter'} />
        <ActionTab title={'RESUME'} onPress={() => console.log('Action Btn Pressed!')} _title={'More Options'} _onPress={() => this.handleToggle.call(this, 'More Actions', 2)} />
        <TabItem title={'Search'} onPress={() => this.handleToggle.call(this, 'Search', 3)} icon={'search'}/>
      </View>
    </React.Fragment>
    );
  }
}

const stylesConsts = {
  tabButton: {
    color: '#707070'
  }
}
const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 1
  },
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
    shadowRadius: 90
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