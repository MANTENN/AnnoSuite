import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView
} from 'react-native';

import BottomNavBar from './component/BottomNavBar'

export default class Root extends Component {
    constructor() {
      super()
      this.fetchedData = this.fetchedData.bind(this)
    }
    state ={
      isFetching: false,
      data: {
        userId: 0,
        id: 0,
        title: null,
        body: null
      }
    }
    handleFetch() {
      this.setState({
        isFetching: true
      })
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => this.setState({
          isFetching: false,
          data: json
        })).catch( error => {throw new Error('An unknown error occured.')})
    }
    fetchedData () {
        return (
          <React.Fragment>
            <Text>userId:</Text>
            <Text>{this.state.data.userId}</Text>
            <Text>title:</Text>
            <Text>{this.state.data.title}</Text>
            <Text>body></Text>
            <Text>{this.state.data.body}</Text>
          </React.Fragment>
        );
      }
    render () {
        return (
          <React.Fragment>
            <View style={styles.container}>
              <ScrollView style={{flex: 1, padding: 50}}>
                <Text style={styles.welcome}>
                  Please leave me alone
                </Text>
                <Text>
                  Fetching...
                </Text>
                <Text>
                  Forever! Hah, Got you!
                </Text>
                <Text style={styles.instructions}>
                  Bye!
                </Text>
                {this.fetchedData}
                <Button disabled={this.state.isFetching} onPress={() => this.handleFetch.call(this)} title={'FETCH DATA'}/>
              </ScrollView>
            </View>
            <BottomNavBar />
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});