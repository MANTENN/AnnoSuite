import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import TabItem from '../atom/TabItem'
import ActionTab from '../atom/ActionTab'
import Panel from '../atom/Panel'
import ActionButton from '../atom/ActionButton';

import realm from './Realm'

interface State {
  overlay: Number,
  actionBtnResume?: boolean,
  title?: any
}

export default class ActionBar extends Component<any, State> {
  constructor(props: any) {
    super(props)
  }
  state = {
    title: "",
    actionBtnResume: false,
    overlay: 0 
  }


  PrimaryButton = (props: any) => {
    return props.children;
  }
  handleToggle(id: Number) {
    let { overlay } = this.state;
    this.setState({
      overlay: id
    })
  }

  render () {
    // fetch()
    let {PrimaryButton} = this;
    let { actionBtnResume } = this.state;
    return (
    <React.Fragment>
      <View style={styles.container}>
        <TabItem title={'Filter'} onPress={() => this.handleToggle.call(this, 1)} icon={'filter'} />
        <ActionTab title={actionBtnResume ? 'RESUME' : 'Import Books'} onPress={() => console.log('Action Btn Pressed!')} _title={'More Options'} _onPress={() => this.handleToggle.call(this, 2)} />
        <TabItem title={'Search'} onPress={() => this.handleToggle.call(this, 3)} icon={'search'}/>
      </View>
      <Panel overlay={this.state.overlay} hideOverlay={() => this.handleToggle.call(this, 0)}/>
      <ActionButton onPress={() => console.log("Action BTN Pressed!")}>
        Import Books
      </ActionButton>
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
  container: {
    borderTopWidth: 2,
    borderColor: '#C1C1C1',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
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