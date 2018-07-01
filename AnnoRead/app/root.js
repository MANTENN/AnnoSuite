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

import Book from './component/Book'
import BottomNavBar from './component/BottomNavBar'

export default class Root extends Component {
    constructor() {
      super()
    }

    render () {
        const book = {
          image: null,
          title: "The American Revolution",
          description: "Lorem ipsum...",
          author: {
            firstName: "John",
            middleName: "Shorty",
            lastName: "Stanford"
          }
        }
        return (
          <React.Fragment>
            <View style={styles.container}>
               <StatusBar
                  hidden={false}
                  backgroundColor="#000"
                  barStyle="dark-content"
                />
              <ScrollView style={{flex: 1, flexDirection: 'row', padding: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Self-Improvement</Text>
                <Book {...book} />
                <Book {...book} />
                <Book {...book} />
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
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  }
});